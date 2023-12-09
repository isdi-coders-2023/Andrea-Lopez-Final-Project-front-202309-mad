import { serverUrl } from '../config';
import { User, UserLogin } from '../entities/user';
import { loginResponse } from '../types/login.response';

export class UserApiRepo {
  apiUrl = serverUrl + '/users';

  async getUser(): Promise<User[]> {
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
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
  // Tiene que haber un multer esperando en el back
  async login(userLogin: UserLogin): Promise<loginResponse> {
    const url = this.apiUrl + '/login';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(userLogin),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}

// registro y login conectados
