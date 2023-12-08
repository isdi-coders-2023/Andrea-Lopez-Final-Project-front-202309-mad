import { configureStore } from '@reduxjs/toolkit';

export const appStore = configureStore({
  reducer: {
    usersState: usersReducer, // los reducer se crean en el slice
  },
});

export type AppDispach = typeof appStore.dispatch;

export type RootState = ReturnType<typeof appStore.getState>;

// export type AppThunk
