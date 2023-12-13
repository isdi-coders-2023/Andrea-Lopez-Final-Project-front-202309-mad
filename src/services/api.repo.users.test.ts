import { User, UserLogin } from '../entities/user';
import { loginResponse } from '../types/login.response';
import { UsersRepo } from './api.repo.users';

describe('Given repo class', () => {
  let jsonMock: jest.Mock;
  describe('When we instantiate getUsers with url address', () => {
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getUsers should be used', async () => {
      const expected: User[] = [];
      const repo = new UsersRepo();
      const result = await repo.getUsers();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When we instantiate getUsers and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then method getCountry should throw an error', async () => {
      const repo = new UsersRepo();
      await expect(repo.getUsers()).rejects.toThrow();
    });
  });

  describe('When we instantiate createUser with url address', () => {
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue({} as User);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getUsers should be used', async () => {
      const newUser = {
        name: 'Test',
      } as unknown as Partial<User>;
      const expected: User = {} as User;
      const repo = new UsersRepo();
      const result = await repo.createUser(newUser);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When we instantiate createUser and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then method createUser should throw an error', async () => {
      const newUser = {
        name: 'Test',
      } as unknown as Partial<User>;
      const repo = new UsersRepo();
      await expect(repo.createUser(newUser)).rejects.toThrow();
    });
  });

  describe('When we instantiate loginUser with url address', () => {
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue({} as loginResponse);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getUsers should be used', async () => {
      const loginUser = {
        name: 'Test',
      } as unknown as UserLogin;
      const expected: User = {} as User;
      const repo = new UsersRepo();
      const result = await repo.login(loginUser);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When we instantiate loginUser and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then method createUser should throw an error', async () => {
      const loginUser = {
        name: 'Test',
      } as unknown as UserLogin;
      const repo = new UsersRepo();
      await expect(repo.login(loginUser)).rejects.toThrow();
    });
  });
});
