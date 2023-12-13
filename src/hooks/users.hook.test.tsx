import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useDispatch } from 'react-redux';
import { User, UserLogin } from '../entities/user';
import { usersHook } from './users.hook';
import { UsersRepo } from '../services/api.repo.users';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
  useSelector: jest.fn().mockReturnValue(jest.fn()),
}));

const mockLoginUser = {} as UserLogin;
const mockNewUser = {} as Partial<User>;
describe('Given usersHook Hook', () => {
  const TestComponent = () => {
    const { logout, login, register } = usersHook();

    return (
      <>
        <button onClick={() => logout()}></button>
        <button onClick={() => login(mockLoginUser)}> </button>
        <button onClick={() => register(mockNewUser)}> </button>
      </>
    );
  };

  let elements: HTMLElement[];

  beforeEach(() => {
    render(<TestComponent></TestComponent>);
    elements = screen.getAllByRole('button');
  });

  const testButtonClick = async (
    buttonIndex: number,
    mockStorageValue?: string
  ) => {
    if (mockStorageValue) {
      Storage.prototype.get = jest.fn().mockReturnValue(mockStorageValue);
    }
    await userEvent.click(elements[buttonIndex]);
    expect(useDispatch()).toHaveBeenCalled();
  };

  describe('When we click button logout', () => {
    test('Then the dispatch should have been called', async () => {
      await testButtonClick(0);
    });
  });

  describe('When we click button login', () => {
    test('Then the dispatch should have been called', async () => {
      await testButtonClick(1);
    });
  });

  describe('When we click button register ', () => {
    test('Then the dispacht should have been called', async () => {
      UsersRepo.prototype.createUser = jest.fn();

      await userEvent.click(elements[3]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
