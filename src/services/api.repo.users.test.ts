import { User, UserLogin } from '../entities/user';
import { UsersRepo } from './api.repo.users';

describe('Given UsersRepo class', () => {
  const repo = new UsersRepo();
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });

    test('Then method getUsers should...', async () => {
      const expected: User[] = [];
      const result = await repo.getUsers();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });

    test('Then method createUser should...', async () => {
      const newUser: Partial<User> = {};
      const mockUser: Partial<User> = { id: '1', name: 'Test Name' };
      const expectedUrl = 'http://localhost:2800/users/register';

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockUser),
      });
      const response = await repo.createUser(newUser);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'POST',
        body: JSON.stringify(newUser), // Ajusta para esperar un cuerpo JSON
        headers: {
          'Content-Type': 'application/json', // Ajusta para esperar el tipo de contenido JSON
        },
      });
      expect(response).toEqual(mockUser);
    });

    test('Then method login should...', async () => {
      const loginUser: UserLogin = {
        email: 'test@test.com',
        passwd: 'passwdtest',
      };
      const expectedUrl = 'http://localhost:2800/users/login';

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(loginUser),
      });
      const response = await repo.login(loginUser);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'POST',
        body: JSON.stringify(loginUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      expect(response).toEqual(loginUser);
    });
  });

  describe('When we instantiate it and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      });
    });
    test('Then method getUsers should throw an error', async () => {
      expect(repo.getUsers()).rejects.toThrow();
    });
    test('Then method createUser should throw an error', async () => {
      const newUser: Partial<User> = {};
      expect(repo.createUser(newUser)).rejects.toThrow();
    });
    test('Then method login should throw an error', async () => {
      const loginUser: UserLogin = {
        email: 'test@test.com',
        passwd: 'passwdtest',
      };
      expect(repo.login(loginUser)).rejects.toThrow();
    });
  });
});
