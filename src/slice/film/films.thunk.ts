import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilmsRepo } from '../../services/api.repo.films';
import { Film } from '../../entities/film';

// get all, create, update y delete

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

export const createFilmsThunk = createAsyncThunk<Film, Params>(
  'create',
  async ({ repo, newFilm }) => {
    const films = await repo.createFilm(newFilm);
    return films;
  }
);

export const updateSkinsThunk = createAsyncThunk<
  Film,
  {
    repo: FilmsRepo;
    id: Film['id'];
    updatedFilms: Partial<Film>;
  }
>('update', async ({ repo, id, updatedFilms }) => {
  const fi = await repo.updateFilm(id, updatedFilms);
  return fi;
});
