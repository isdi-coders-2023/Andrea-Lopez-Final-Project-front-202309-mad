import { FilmsRepo } from '../../services/api.repo.films';
import { store } from '../../store/store';
import {
  createFilmThunk,
  loadFilmsThunk,
  updateFilmsThunk,
} from './films.thunk';

describe('Given a scenario where...', () => {
  describe('When an action is taken...', () => {
    const mockFilmsRepo = {
      repo: {
        getFilms: jest.fn().mockReturnValue([]),
        createFilm: jest.fn().mockReturnValue({}),
        updateFilm: jest.fn().mockResolvedValue({}),
      } as unknown as FilmsRepo,
    };

    test('Then it should ...', async () => {
      const data = { ...mockFilmsRepo } as { repo: FilmsRepo };
      await store.dispatch(loadFilmsThunk(data.repo));
      expect(data.repo.getFilms).toHaveBeenCalled();
    });

    test('Then it should dispatch ...', async () => {
      const data = { ...mockFilmsRepo } as { repo: FilmsRepo };
      const newFilm = {} as FormData;
      await store.dispatch(createFilmThunk({ repo: data.repo, newFilm }));
      expect(data.repo.createFilm).toHaveBeenCalledWith(newFilm);
    });
    test('Then it should ...', async () => {
      const data = { ...mockFilmsRepo } as { repo: FilmsRepo };
      const idToUpdate = '1';
      const updateFilm = {} as FormData;

      await store.dispatch(
        updateFilmsThunk({
          repo: data.repo,
          id: idToUpdate,
          updateFilm,
        })
      );
      expect(data.repo.updateFilm).toHaveBeenCalledWith(idToUpdate, updateFilm);
    });
  });
});
