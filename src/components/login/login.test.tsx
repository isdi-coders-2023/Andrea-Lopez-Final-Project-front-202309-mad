import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { Login } from './login';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../store/store';
import userEvent from '@testing-library/user-event';
import { usersHook } from '../../hooks/users/users.hook';

jest.mock('../../hooks/users/users.hook', () => ({
  ...jest.requireActual('../../hooks/users/users.hook'),
  usersHook: jest.fn().mockReturnValue({
    login: jest.fn(),
    loggedUser: null,
  }),
}));

describe('Given login component...', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <Login></Login>
        </Provider>
      </Router>
    );
  });

  test('Then it completes the form', async () => {
    const form = screen.getByLabelText(/form/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/contraseña/i);

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password123');
    fireEvent.submit(form);

    expect(usersHook().login).toHaveBeenCalledWith({
      email: 'test@example.com',
      passwd: 'password123',
    });
  });
});
