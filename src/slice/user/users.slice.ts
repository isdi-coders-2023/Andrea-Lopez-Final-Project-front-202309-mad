import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../entities/user';
import { loginThunk } from './users.thunk';
import { loginResponse } from '../../types/login.response';

type LoginState = 'idle' | 'logging' | 'error';

export type UsersState = {
  loggedUser: User | null;
  loggingState: LoginState;
  token: string | null;
};

const initialState: UsersState = {
  loggedUser: null,
  loggingState: 'idle',
  token: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    logout: (state: UsersState) => {
      state.loggedUser = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state: UsersState) => {
      state.loggingState = 'logging';
    });

    builder.addCase(
      loginThunk.fulfilled,
      (state: UsersState, { payload }: PayloadAction<loginResponse>) => {
        state.loggedUser = payload.user;
        state.token = payload.token;
      }
    );

    builder.addCase(loginThunk.rejected, (state: UsersState) => {
      state.loggingState = 'error';
    });
  },
});

export default usersSlice.reducer;
export const actions = usersSlice.actions;
