import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegisterPage from './register.page';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { store } from '../store/store';

describe('RegisterPage Component', () => {
  test('renders register page with title and register component', () => {
    render(
      <Router>
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      </Router>
    );

    const titleElement = screen.getByText(/REGISTER/i);
    expect(titleElement).toBeInTheDocument();

    const registerComponent = screen.getByTestId('register-component');
    expect(registerComponent).toBeInTheDocument();
  });
});
