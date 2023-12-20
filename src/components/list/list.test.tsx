import { render, screen, waitFor } from '@testing-library/react';
import { useFilms } from '../../hooks/film/use.films';
import { List } from './list';

jest.mock('../../hooks/film/use.films', () => ({
  useFilms: jest.fn(),
}));

describe('List component', () => {
  it('renders films correctly and triggers loadFilms on mount', async () => {
    // Mock la función useFilms
    const mockLoadFilms = jest.fn();
    const mockFilms = [
      { id: '1', title: 'Film 1' },
      { id: '2', title: 'Film 2' },
    ];

    useFilms.mockReturnValue({ loadFilms: mockLoadFilms, films: mockFilms });

    render(<List filmsToRender={mockFilms} />);

    expect(mockLoadFilms).toHaveBeenCalled();

    await waitFor(() => {});

    expect(screen.getByText('Film 1')).toBeInTheDocument();
    expect(screen.getByText('Film 2')).toBeInTheDocument();
  });
});
