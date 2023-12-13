import { useDispatch } from 'react-redux';
import { useCallback, useMemo } from 'react';
import { AppDispatch } from '../../store/store';
import { FilmsRepo } from '../../services/api.repo.films';
import { loadFilmsThunk } from '../../slice/film/films.thunk';

export function filmsHook() {
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new FilmsRepo(), []);

  const loadFilms = useCallback(async () => {
    try {
      dispatch(loadFilmsThunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  //  const handleDetailsPage = async (car: Car) => {
  //    dispatch(setCurrentCar(car));
  //  };

  return {
    loadFilms,
  };
}
