import { Film } from '../../entities/film';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  createFilmThunk,
  deleteFilmsThunk,
  loadFilmsThunk,
  updateFilmsThunk,
} from './films.thunk';

export type FilmsState = {
  films: Film[];
  stateOption: 'idle' | 'loading' | 'error';
  currentFilm: Film | null;
  filmUpdateState: 'idle' | 'loading';
};

const initialState: FilmsState = {
  films: [],
  stateOption: 'idle',
  currentFilm: null,
  filmUpdateState: 'idle',
};

const filmsSlice = createSlice({
  name: 'films',
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
      state.stateOption = 'loading';
      return state;
    });

    builder.addCase(
      loadFilmsThunk.fulfilled,
      (state: FilmsState, { payload }: PayloadAction<Film[]>) => {
        state.films = payload;
        state.stateOption = 'idle';
        return state;
      }
    );

    builder.addCase(loadFilmsThunk.rejected, (state: FilmsState) => {
      state.stateOption = 'error';
      return state;
    });

    builder.addCase(
      createFilmThunk.fulfilled,
      (state: FilmsState, { payload }: PayloadAction<Film>) => ({
        ...state,
        films: [...state.films, payload],
      })
    );

    builder.addCase(updateFilmsThunk.pending, (state: FilmsState) => {
      state.filmUpdateState = 'loading';
      return state;
    });

    builder.addCase(
      updateFilmsThunk.fulfilled,
      (state: FilmsState, { payload }: PayloadAction<Film>) => {
        const findFilm =
          state.films[state.films.findIndex((item) => item.id === payload.id)];
        state.filmUpdateState = 'idle';
        state.currentFilm = findFilm;

        return state;
      }
    );
    builder.addCase(
      deleteFilmsThunk.fulfilled,
      (state: FilmsState, { payload }: PayloadAction<Film['id']>) => {
        state.films.splice(
          state.films.findIndex((item) => item.id === payload),
          1
        );
        return state;
      }
    );
  },
});

export default filmsSlice.reducer;
export const { setCurrentFilm } = filmsSlice.actions;
