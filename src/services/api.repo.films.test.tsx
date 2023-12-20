import { Film } from '../entities/film';
import { FilmsRepo } from './api.repo.films';

describe('Given FilmsRepo class', () => {
  const repo = new FilmsRepo('');
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });

    test('Then method getFilms should...', async () => {
      const expected: Film[] = [];
      const result = await repo.getFilms();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });

    test('Then the createFilm should be used...', async () => {
      const result = await repo.createFilm({} as FormData);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual([]);
    });
  });

  describe('When we call getFilms and response is bad', () => {
    const token = '';
    beforeEach(() => {
      const jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jsonMock,
      });
    });
    test('Then getFilms should throw an error', async () => {
      const repo = new FilmsRepo(token);
      await expect(repo.getFilms()).rejects.toThrow();
    });
  });

  describe('When we call deleteFilm and response is bad', () => {
    const token = '';
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then deleteFilm should throw an error', async () => {
      const filmId = '1';
      const repo = new FilmsRepo(token);
      await expect(repo.deleteFilm(filmId)).rejects.toThrow();
    });
  });

  describe('When we call updateFilm', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    const jsonMock = jest.fn().mockResolvedValue({} as Film);
    test('Then fetch should be called and return a Film', async () => {
      const filmId = '1';
      const token = '';
      const updatedFilm = {
        name: 'Updated Film',
      } as unknown as FormData;
      const expected: Film = {} as Film;
      const repo = new FilmsRepo(token);
      const result = await repo.updateFilm(filmId, updatedFilm);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When we call updateFilm and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then updatedFilm should throw an error', async () => {
      const filmId = '1';
      const token = '';
      const updatedFilm = {
        name: 'Updated Film',
      } as unknown as FormData;
      const repo = new FilmsRepo(token);
      await expect(repo.updateFilm(filmId, updatedFilm)).rejects.toThrow();
    });
  });

  describe('When we call createFilm and response is bad', () => {
    const token = '';
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then createFilm should throw an error', async () => {
      const repo = new FilmsRepo(token);
      await expect(repo.createFilm({} as FormData)).rejects.toThrow();
    });
  });
});
