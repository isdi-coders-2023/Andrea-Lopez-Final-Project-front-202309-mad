import { Film } from '../../entities/film';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadFilmsThunk } from './films.thunk';

export type FilmsState = {
  films: Film[];
  filmsState: 'idle' | 'loading' | 'error';
  currentFilm: Film | null;
};

const initialState: FilmsState = {
  films: [],
  filmsState: 'idle',
  currentFilm: null,
};

const filmsSlice = createSlice({
  name: 'skins',
  initialState,
  reducers: {
    setCurrentFilm: (
      state: FilmsState,
      { payload }: PayloadAction<Film | null>
    ) => {
      state.currentFilm = payload;
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadFilmsThunk.pending, (state: FilmsState) => {
      state.filmsState = 'loading';
      return state;
    });
    builder.addCase(
      loadFilmsThunk.fulfilled,
      (state: FilmsState, { payload }: PayloadAction<Film[]>) => {
        state.films = payload;
        state.filmsState = 'idle';
        return state;
      }
    );
    builder.addCase(loadFilmsThunk.rejected, (state: FilmsState) => {
      state.filmsState = 'error';
      return state;
    });
  },
});

export default filmsSlice.reducer;
export const { setCurrentFilm } = filmsSlice.actions;
