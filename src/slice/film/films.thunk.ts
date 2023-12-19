import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilmsRepo } from '../../services/api.repo.films';
import { Film } from '../../entities/film';

type Params = {
  repo: FilmsRepo;
  newFilm: FormData;
};

export const loadFilmsThunk = createAsyncThunk<Film[], FilmsRepo>(
  'load',
  async (repo) => {
    const films = await repo.getFilms();
    return films;
  }
);
export const createFilmThunk = createAsyncThunk<Film, Params>(
  'create',
  async ({ repo, newFilm }) => {
    const finalFilm = await repo.createFilm(newFilm);
    return finalFilm;
  }
);

export const updateFilmsThunk = createAsyncThunk<
  Film,
  {
    repo: FilmsRepo;
    id: Film['id'];
    updateFilm: FormData;
  }
>('update', async ({ repo, id, updateFilm }) => {
  const finalFilm = await repo.updateFilm(id, updateFilm);
  return finalFilm;
});

export const deleteFilmsThunk = createAsyncThunk<
  Film['id'],
  {
    repo: FilmsRepo;
    id: Film['id'];
  }
>('delete', async ({ repo, id }) => {
  await repo.deleteFilm(id);
  return id;
});
