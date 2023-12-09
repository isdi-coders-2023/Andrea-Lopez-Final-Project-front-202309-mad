import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import usersReducer from '../slice/users.slice';

export const store = configureStore({
  reducer: {
    usersState: usersReducer, // los reducer se crean en el slice
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
