import { User } from '../entities/user';

export type loginResponse = {
  user: User;
  token: string;
};
