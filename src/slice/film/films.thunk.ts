import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilmsRepo } from '../../services/api.repo.films';
import { Film } from '../../entities/film';

export const loadFilmsThunk = createAsyncThunk<Film[], FilmsRepo>(
  'load',
  async (repo) => {
    const films = await repo.getFilms();
    return films;
  }
);
