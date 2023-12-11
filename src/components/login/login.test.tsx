import { MemoryRouter as Router } from 'react-router-dom';
import { store } from '../../store/store';
import { Login } from './login';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Given Login Component', () => {
  describe('When Login in rendered', () => {
    test('Then login renders login form and handle submit button', async () => {
      render(
        <Router>
          <Provider store={store}>
            <Login></Login>
          </Provider>
        </Router>
      );
      const form = screen.getByRole('form');
      const input = screen.getAllByRole('textbox');
      await userEvent.type(input[0], 'test');
      await userEvent.click(screen.getAllByRole('button')[0]);
      await fireEvent.submit(form);
    });
  });
});
