import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from './login.page';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { store } from '../store/store';

describe('LoginPage Component', () => {
  test('renders login page with title and login component', () => {
    render(
      <Router>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </Router>
    );

    const titleElement = screen.getByText(/LOGIN/i);
    expect(titleElement).toBeInTheDocument();

    const loginComponent = screen.getByTestId('login-component');
    expect(loginComponent).toBeInTheDocument();
  });
});
