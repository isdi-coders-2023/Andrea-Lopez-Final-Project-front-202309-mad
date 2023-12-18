import { Film } from '../../entities/film';
import { FilmsRepo } from '../../services/api.repo.films';
import { FilmsState } from './films.slice';
import { createFilmThunk, updateFilmsThunk } from './films.thunk';

describe('Given filmsReducer', () => {
  describe(' When films/setCurrentSkin action is dispacth  ', () => {
    test('Then the new state will be returned ', () => {
      const mockFilm = { name: 'NameTest' } as unknown as Film;
      const action = {
        type: 'films/setCurrentSkin',
        payload: mockFilm,
      };
      const state: FilmsState = {} as FilmsState;
      const result = filmsReducer(state, action);
      expect(result.currentFilm).toBe(mockFilm);
    });
  });

  describe(' When films/load/pending action is dispacth  ', () => {
    test('Then the new state will be returned ', () => {
      const action = { type: 'load/pending' };
      const state: FilmsState = {} as FilmsState;
      const result = filmsReducer(state, action);
      expect(result.filmsState).toBe('loading');
    });
  });

  test('Then the new state will be returned ', () => {
    const action = { type: 'load/rejected' };
    const state: FilmsState = {} as FilmsState;
    const result = filmsReducer(state, action);
    expect(result.filmsState).toBe('error');
  });

  test('Then the new state will be returned ', () => {
    const action = {
      type: 'load/fulfilled',
      payload: [{}] as unknown as Film,
    };
    const state: FilmsState = {} as FilmsState;
    const result = filmsReducer(state, action);
    expect(result.filmsState).toBe('idle');
  });

  describe('When createFilmThunk.fulfilled action is dispatched', () => {
    test('Then the new skin should be added to the state', () => {
      const mockFilm = { id: '1', name: 'NameTest' } as unknown as Film;
      const action = {
        type: createFilmThunk.fulfilled.type,
        payload: mockFilm,
      };
      const state: FilmsState = { films: [] } as unknown as FilmsState;
      const result = filmsReducer(state, action);
      expect(result.films).toContain(mockFilm);
    });
  });

  describe('When updatefilmsThunk.fulfilled action is dispatched', () => {
    test('Then the film should be updated in the state', () => {
      const mockFilm = { id: '1', name: 'NameTest' } as unknown as Film;
      const action = {
        type: updateFilmsThunk.fulfilled.type,
        payload: updatedFilm,
      };
      const state: FilmsRepo = { films: [mockFilm] } as FilmsRepo;
      const result = filmsReducer(state, action);
      expect(result.films[0]).toEqual(updatedFilm);
    });
  });
});
