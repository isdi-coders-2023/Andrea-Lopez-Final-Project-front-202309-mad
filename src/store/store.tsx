import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import usersReducer from '../slice/user/users.slice';

export const store = configureStore({
  reducer: {
    usersState: usersReducer,
    // filmsState: filmsReducer,
  },
});

export type AppDispach = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
