import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { store } from '../../store/store';
import { Register } from './register';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';

jest.mock('../../hooks/users.hook', () => ({
  usersHook: jest.fn().mockReturnValue({
    register: jest.fn(),
  }),
}));
describe('Given Register Component', () => {
  describe('When register is rendered', () => {
    test('Then register renders register form and handles submit button', async () => {
      render(
        <Router>
          <Provider store={store}>
            <Register></Register>
          </Provider>
        </Router>
      );
      const form = screen.getByRole('form');
      const input = screen.getAllByRole('textbox');
      await userEvent.type(input[0], 'test');
      await userEvent.click(screen.getAllByRole('button')[0]);
      await fireEvent.submit(form);
      //todos los datos a rellenar en nuestro test
    });
  });
});
