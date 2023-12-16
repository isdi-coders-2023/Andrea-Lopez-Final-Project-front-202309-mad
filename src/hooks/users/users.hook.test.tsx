import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { User, UserLogin } from '../../entities/user';
import { usersHook } from './users.hook';
import { store } from '../../store/store';
import { UsersRepo } from '../../services/api.repo.users';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

const mockLoginUser = {} as UserLogin;
const mockNewUser = {} as Partial<User>;

describe('Given user Hook', () => {
  const TestComponents = () => {
    const { login, logout, register } = usersHook();

    return (
      <>
        <button onClick={() => logout()}></button>
        <button onClick={() => login(mockLoginUser)}></button>
        <button onClick={() => register(mockNewUser)}></button>
      </>
    );
  };

  let elements: HTMLElement[];

  beforeEach(() => {
    render(
      <Provider store={store}>
        <TestComponents></TestComponents>
      </Provider>
    );
    elements = screen.getAllByRole('button');
  });

  describe('When an user logout', () => {
    test('Then the dispatch should have been called', async () => {
      await userEvent.click(elements[0]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });

  describe('When an user login', () => {
    test('Then the dispatch should have been called', async () => {
      await userEvent.click(elements[1]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });

  describe('When an user register', () => {
    test('Then the dispatch should have been called', async () => {
      UsersRepo.prototype.createUser = jest.fn();
      await userEvent.click(elements[2]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
