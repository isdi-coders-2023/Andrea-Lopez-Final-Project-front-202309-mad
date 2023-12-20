import { Film } from '../../entities/film';
import filmsReducer, { FilmsState } from './films.slice';

describe('Given filmsReducer', () => {
  describe('When films/setCurrentFilm action is dispacth', () => {
    test('Then the new state will be returned with the currentFilm set', () => {
      const mockFilm = { name: 'NameTest' } as unknown as Film;
      const action = {
        type: 'films/setCurrentFilm',
        payload: mockFilm,
      };
      const state: FilmsState = {} as FilmsState;
      const result = filmsReducer(state, action);
      expect(result.currentFilm).toBe('films/setCurrentFilm');
    });
  });

  describe('When films/load/pending action is dispacth', () => {
    test('Then the new state will be returned with stateOption set to "loading"', () => {
      const action = { type: 'load/pending' };
      const state: FilmsState = {} as FilmsState;
      const result = filmsReducer(state, action);
      expect(result.stateOption).toBe('loading');
    });
  });

  describe('When films/load/rejected action is dispacth', () => {
    test('Then the new state will be returned with stateOption set to "error"', () => {
      const action = { type: 'load/rejected' };
      const state: FilmsState = {} as FilmsState;
      const result = filmsReducer(state, action);
      expect(result.stateOption).toBe('error');
    });
  });
  describe('When films/load/fulfilled action is dispacth', () => {
    test('Then the new state will be returned with stateOption set to "idle"', () => {
      const action = {
        type: 'load/fulfilled',
        payload: [{}] as unknown as Film,
      };
      const state: FilmsState = {} as FilmsState;
      const result = filmsReducer(state, action);
      expect(result.stateOption).toBe('idle');
    });
  });
  describe('When films/create/fulfilled action is dispatched', () => {
    test('Then the new Film should be added to the state', () => {
      const mockFilm = {
        id: '1',
        name: 'NameTest',
      } as unknown as Film;
      const action = {
        type: 'create/fulfilled',
        payload: mockFilm,
      };
      const state: FilmsState = { films: [] } as unknown as FilmsState;
      const result = filmsReducer(state, action);
      expect(result.films).toStrictEqual([mockFilm]);
    });
  });
  describe('When films/update/fulfilled action is dispacth', () => {
    test('Then the updated Film should replace the existing one in the state', () => {
      const mockFilm = {
        id: '1',
        name: 'NameTest',
      } as unknown as Film;
      const updateFilm = {
        id: '1',
        name: 'UpdatedName',
      } as unknown as Film;
      const action = {
        type: 'update/fulfilled',
        payload: updateFilm,
      };
      const state: FilmsState = {
        films: [mockFilm],
      } as unknown as FilmsState;
      const result = filmsReducer(state, action);
      expect(result.filmUpdateState).toBe('idle');
      expect(result.films).toStrictEqual([updateFilm]);
    });
  });
  describe('When films/delete/fulfilled action is dispacth', () => {
    test('Then the clothingItem should be removed froms the state', () => {
      const mockFilm = {
        id: '1',
        name: 'NameTest',
      } as unknown as Film;
      const action = {
        type: 'delete/fulfilled',
        payload: mockFilm as unknown as Film['id'],
      };
      const state: FilmsState = {
        films: [mockFilm],
      } as FilmsState;
      const result = filmsReducer(state, action);
      expect(result.films).toStrictEqual([]);
    });
  });
  //   describe('When films/filter/fulfilled action is dispacth', () => {
  //     test('Then the films in the state should be updated based on the filter result', () => {
  //       const mockFilteredClothes = [
  //         {
  //           id: '1',
  //           name: 'FilteredClothingItem',
  //         },
  //       ] as unknown as Film[];
  //       const action = {
  //         type: 'filter/fulfilled',
  //         payload: mockFilteredClothes,
  //       };
  //       const state: FilmsState = {
  //         films: [
  //           {
  //             id: '1',
  //             name: 'ClothingItem1',
  //           },
  //           {
  //             id: '2',
  //             name: 'ClothingItem2',
  //           },
  //         ],
  //       } as FilmsState;
  //       const result = filmsReducer(state, action);
  //       expect(result.films).toStrictEqual(mockFilteredClothes);
  //     });
  //   });
});
