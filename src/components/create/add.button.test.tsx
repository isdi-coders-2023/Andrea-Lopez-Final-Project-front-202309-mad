import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import userEvent from '@testing-library/user-event';
import { User } from '../../entities/user';
import { usersHook } from '../../hooks/users/users.hook';
import AddButton from './add.button';

jest.mock('../../hooks/users/users.hook');

describe('AddButton', () => {
  test('renders the AddButton and triggers the link', () => {
    (usersHook as jest.Mock).mockReturnValue({
      loggedUser: {} as User,
    });

    render(
      <Router>
        <Provider store={store}>
          <AddButton />
        </Provider>
      </Router>
    );

    const linkElement = screen.getByTestId('link');
    expect(linkElement).toBeInTheDocument();
    userEvent.click(linkElement);
    expect(window.location.pathname).toBe('/');
  });
});
