import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import usersReducer from '../slice/user/users.slice';
import filmsReducer from '../slice/film/films.slice';

export const store = configureStore({
  reducer: {
    usersState: usersReducer,
    filmsState: filmsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
