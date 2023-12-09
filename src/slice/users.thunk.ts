import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserApiRepo } from '../services/api.repo.users';
import { loginResponse } from '../types/login.response';
import { UserLogin } from '../entities/user';

export const loginThunk = createAsyncThunk<
  loginResponse,
  {
    userLogin: UserLogin;
    repo: UserApiRepo;
  }
>('login', async ({ userLogin, repo }) => {
  const loginResponse = await repo.login(userLogin);
  return loginResponse;
});
