import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { useFilms } from '../film/use.films';
import { Film } from '../../entities/film';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn().mockReturnValue({ token: 'test' }),
}));

describe('Given useFilms hook...', () => {
  const dispatch = jest.fn();
  (useDispatch as jest.Mock).mockReturnValue(dispatch);

  describe('When loadFilms component is called', () => {
    test('Then it should dispatch', async () => {
      const { result } = renderHook(() => useFilms());
      const { loadFilms } = result.current;

      loadFilms();
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('When updateFilm component is called', () => {
    const mockId = '';
    const mockUpdatedFilm = {} as FormData;
    test('Then it should dispatch', async () => {
      const { result } = renderHook(() => useFilms());
      const { updateFilm } = result.current;

      updateFilm(mockId, mockUpdatedFilm);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('When createFilm component is called', () => {
    test('Then it should dispatch', async () => {
      const { result } = renderHook(() => useFilms());
      const { createFilm } = result.current;

      createFilm({} as FormData);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('When deleteFilm component is called', () => {
    test('Then it should dispatch', async () => {
      const { result } = renderHook(() => useFilms());
      const { deleteFilm } = result.current;

      deleteFilm({} as Film['id']);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('When deFilm component is called', () => {
    test('Then it should dispatch', async () => {
      const { result } = renderHook(() => useFilms());
      const { handleDetailsPage } = result.current;

      await handleDetailsPage({} as Film);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
