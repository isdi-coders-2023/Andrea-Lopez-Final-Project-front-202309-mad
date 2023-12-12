import { Film } from '../entities/film';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type FilmsState = {
  films: Film[];
  filmsState: 'idle' | 'logging' | 'error';
  currentFilm: Film | null;
};

const initialState: FilmsState = {
  films: [],
  filmsState: 'idle',
  currentFilm: null,
};

// creacion del slice

const skinsSlice = createSlice({
  name: 'skins',
  initialState,
  reducers: {
    setCurrentSkin: (
      state: FilmsState,
      { payload }: PayloadAction<Film | null>
    ) => {
      state.currentFilm = payload;
      return state;
    },
  },

  // extrareducers
});
