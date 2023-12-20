import { render, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import configureStore from 'redux-mock-store';
import HomePage from './home.page';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('HomePage component', () => {
  const mockStore = configureStore([]);

  it('renders films from the Redux store correctly', () => {
    // Mock the films data
    const mockFilms = [
      { id: '1', title: 'Test Film 1' },
      { id: '2', title: 'Test Film 2' },
    ];

    // Mock the useSelector hook
    useSelector.mockReturnValue({ films: mockFilms });

    // Create a mock store
    const store = mockStore({
      filmsState: {
        films: mockFilms,
      },
    });

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    expect(screen.getByText('Test Film 1')).toBeInTheDocument();
    expect(screen.getByText('Test Film 2')).toBeInTheDocument();
  });

  render(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );

  expect(screen.getByText('No films available')).toBeInTheDocument();
});
