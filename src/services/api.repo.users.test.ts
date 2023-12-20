import { User, UserLogin } from '../entities/user';
import { UsersRepo } from './api.repo.users';

describe('Given ApiRepoClass', () => {
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue({});
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });

    const repo = new UsersRepo();

    test('Then the method userLogin should be used', async () => {
      const result = await repo.login({} as UserLogin);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual({});
    });

    test('Then the method createUser should be used', async () => {
      const result = await repo.createUser({} as User);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual({});
    });
    test('Then the method getUsers should be used', async () => {
      await repo.getUsers();
      expect(jsonMock).toHaveBeenCalled();
    });
  });
});

describe('When we instantiate it and response is not ok', () => {
  const errorStatus = 404;
  const errorStatusText = 'Not Found';

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      status: errorStatus,
      statusText: errorStatusText,
    });
  });

  const repo = new UsersRepo();

  test('Then the method userLogin should throw an error', async () => {
    await expect(repo.login({} as User)).rejects.toThrow();
  });

  test('Then the method userLogin should throw an error', async () => {
    await expect(repo.createUser({} as Partial<User>)).rejects.toThrow();
  });
  test('Then the method getUsers should throw an error', async () => {
    await expect(repo.getUsers()).rejects.toThrow();
  });
});
