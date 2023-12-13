import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginResponse } from '../../types/login.response';
import { UserLogin } from '../../entities/user';
import { UsersRepo } from '../../services/api.repo.users';

export const loginThunk = createAsyncThunk<
  loginResponse,
  {
    userLogin: UserLogin;
    repo: UsersRepo;
  }
>('login', async ({ userLogin, repo }) => {
  const loginResponse = await repo.login(userLogin);

  return loginResponse;
});
