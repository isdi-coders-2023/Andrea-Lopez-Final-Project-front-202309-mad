import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../entities/user';
import { loginThunk } from './users.thunk';
import { loginResponse } from '../types/login.response';

type LoginState = 'idle' | 'logging' | 'error';

type UserState = {
  loggedUser: User | null; // guardamos
  loggingState: LoginState;
  token: string; // token
};

const initial: UserState = {
  loggedUser: null,
  loggingState: 'idle',
  token: '', // cadena vacia ya que es el nulo de lo string
};

// estado de log in y log out

const userSlice = createSlice({
  name: 'users',
  initialState: initial,
  reducers: {
    logout: (state: UserState) => {
      state.loggedUser = null;
      state.token = '';
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state: UserState) => {
      state.loggingState = 'logging';
    });

    builder.addCase(
      loginThunk.fulfilled,
      (state: UserState, { payload }: PayloadAction<loginResponse>) => {
        state.loggedUser = payload.user;
        state.token = payload.token;
        state.loggingState = 'idle'; // Set the logging state back to idle
      }
    );

    builder.addCase(loginThunk.rejected, (state: UserState) => {
      state.loggingState = 'error';
    });
  },
});

export default userSlice.reducer;
export const actions = userSlice.actions;
