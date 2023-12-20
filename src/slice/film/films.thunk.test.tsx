import { FilmsRepo } from '../../services/api.repo.films';
import { store } from '../../store/store';
import {
  createFilmThunk,
  updateFilmsThunk,
  deleteFilmsThunk,
} from './films.thunk';

describe('Given a scenario where...', () => {
  describe('When an action is taken...', () => {
    const mockFilmsRepo = {
      repo: {
        getFilms: jest.fn().mockReturnValue([]),
        createFilm: jest.fn().mockReturnValue({}),
        updateFilm: jest.fn().mockResolvedValue({}),
        deleteFilm: jest.fn().mockResolvedValue('1'),
      } as unknown as FilmsRepo,
    };
    // test('Then it should dispatch loadRecipesThunk and update Recipes store', async () => {
    //   const data = { ...mockFilmsRepo } as { repo: FilmsRepo };
    //   await store.dispatch(loadFilmsThunk({ repo: data.repo }));
    //   expect(data.repo.getFilms).toHaveBeenCalled();
    // });

    test('Then it should dispatch createRecipeThunk and create a new clothing item', async () => {
      const data = { ...mockFilmsRepo } as { repo: FilmsRepo };
      const newFilm = {} as FormData;
      await store.dispatch(createFilmThunk({ repo: data.repo, newFilm }));
      expect(data.repo.createFilm).toHaveBeenCalledWith(newFilm);
    });
    test('Then it should dispatch updateFilmsThunk and update a Film', async () => {
      const data = { ...mockFilmsRepo } as { repo: FilmsRepo };
      const id = '1';
      const updateFilm = {} as FormData;

      await store.dispatch(
        updateFilmsThunk({
          repo: data.repo,
          id: id,
          updateFilm,
        })
      );
      expect(data.repo.updateFilm).toHaveBeenCalledWith(id, updateFilm);
    });
    test('Then it should dispatch deleteRecipesThunk and delete a Recipe', async () => {
      const data = { ...mockFilmsRepo } as { repo: FilmsRepo };
      const id = '1';
      await store.dispatch(deleteFilmsThunk({ repo: data.repo, id: id }));

      expect(data.repo.deleteFilm).toHaveBeenCalledWith(id);
    });
  });
});
