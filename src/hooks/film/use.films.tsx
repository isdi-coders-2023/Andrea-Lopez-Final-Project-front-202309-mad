import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';
import { AppDispatch, RootState } from '../../store/store';
import { FilmsRepo } from '../../services/api.repo.films';
import {
  loadFilmsThunk,
  createFilmThunk,
  updateFilmsThunk,
} from '../../slice/film/films.thunk';
import { Film } from '../../entities/film';
import { setCurrentFilm } from '../../slice/film/films.slice';

export function useFilms() {
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.usersState);

  const { films, currentFilm } = useSelector(
    (state: RootState) => state.filmsState
  );

  const repo = useMemo(() => new FilmsRepo(token || ''), [token]);

  const loadFilms = useCallback(async () => {
    try {
      dispatch(loadFilmsThunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo, dispatch]);

  const createFilm = async (newFilm: FormData) => {
    try {
      dispatch(
        createFilmThunk({
          repo,
          newFilm,
        })
      );
    } catch (error) {}
  };

  const updateFilm = async (id: Film['id'], updateFilm: FormData) => {
    try {
      dispatch(
        updateFilmsThunk({
          repo,
          id,
          updateFilm,
        })
      );
    } catch (error) {}
  };

  const handleCurrentFilm = async (film: Film) => {
    dispatch(setCurrentFilm(film));
  };

  const handleDetailsPage = async (film: Film) => {
    dispatch(setCurrentFilm(film));
  };

  return {
    loadFilms,
    handleDetailsPage,
    films,
    createFilm,
    updateFilm,
    currentFilm,
    handleCurrentFilm,
  };
}
