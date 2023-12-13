import { UserLogin } from '../../entities/user';
import { UsersRepo } from '../../services/api.repo.users';
import { store } from '../../store/store';
import { loginThunk } from './users.thunk';

describe('Given a scenario where...', () => {
  describe('When an action is taken...', () => {
    const sharedData = {
      repo: {
        login: jest.fn().mockReturnValue({
          token: '',
        }),
        loginWithToken: jest.fn().mockReturnValue({
          token: '',
        }),
      } as unknown as UsersRepo,
    };

    test('Then it should ...', async () => {
      const data = { ...sharedData, userLogin: {} as UserLogin };
      await store.dispatch(loginThunk(data));
      expect(data.repo.login).toHaveBeenCalled();
      data.repo.login;
    });
  });
});
