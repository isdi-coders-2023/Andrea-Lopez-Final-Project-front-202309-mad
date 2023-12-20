import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import Details from './details';
import { store } from '../../store/store';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../hooks/users.hook', () => ({
  useUsers: jest.fn(),
}));

jest.mock('../../hooks/use.films', () => ({
  useCars: jest.fn().mockReturnValue({
    currentFilm: {
      make: 'makeTest',
      picture: 'test',
    },
  }),
}));

describe('Details Component', () => {
  test('renders details correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>
    );

    const result = screen.getByTestId('paragraph');
    expect(result).toBeInTheDocument();
    const loginButton = screen.getByTestId('button');
    expect(loginButton).toBeInTheDocument();
  });
});
