import { serverUrl } from '../config';
import { User, UserLogin } from '../entities/user';
import { loginResponse } from '../types/login.response';

export class UsersRepo {
  apiUrl = serverUrl + '/users';

  // Creo que no es necesario ponerla
  async getUsers(): Promise<User[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createUser(newUser: Partial<User>): Promise<User> {
    const url = this.apiUrl + '/register';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: { 'Content-type': 'application/json' },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async login(loginUser: UserLogin): Promise<loginResponse> {
    const url = this.apiUrl + '/login';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(loginUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  // async loginWithToken(token: string): Promise<LoginResponse> {
  //   const url = this.apiUrl + '/login';
  //   const response = await fetch(url, {
  //     method: 'PATCH',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   if (!response.ok)
  //     throw new Error(response.status + ' ' + response.statusText);
  //   return response.json();
  // }
}
