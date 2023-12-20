import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Card } from './card';

jest.mock('../../hooks/film/use.films', () => ({
  useFilms: () => ({
    handleDetailsPage: jest.fn(),
    deleteFilm: jest.fn(),
  }),
}));

jest.mock('../../hooks/users/users.hook', () => ({
  usersHook: () => ({
    loggedUser: {
      /* mocked user data */
    },
  }),
}));

describe('Card component', () => {
  it('renders correctly with actions buttons for logged-in user', () => {
    render(
      <MemoryRouter>
        <Card
          film={{
            id: '1',
            title: 'Test Film',
            director: 'Test Director',
            image: { cloudinaryURL: 'test-url' },
          }}
        />
      </MemoryRouter>
    );

    expect(screen.getByAltText('delete-icon')).toBeInTheDocument();
    expect(screen.getByAltText('edit-icon')).toBeInTheDocument();
  });

  it('calls deleteFilm when delete icon is clicked', () => {
    const { deleteFilm } = require('../../hooks/film/use.films'); // Require the mocked module

    render(
      <MemoryRouter>
        <Card
          film={{
            id: '1',
            title: 'Test Film',
            director: 'Test Director',
            image: { cloudinaryURL: 'test-url' },
          }}
        />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByAltText('delete-icon'));

    expect(deleteFilm).toHaveBeenCalledWith('1');
  });

  it('renders EditFilm component when edit icon is clicked', () => {
    render(
      <MemoryRouter>
        <Card
          film={{
            id: '1',
            title: 'Test Film',
            director: 'Test Director',
            image: { cloudinaryURL: 'test-url' },
          }}
        />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByAltText('edit-icon'));

    expect(screen.getByText('Edit Film')).toBeInTheDocument(); // Assuming the EditFilm component renders a title
  });
});
