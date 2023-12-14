import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';
import { AppDispatch, RootState } from '../../store/store';
import { FilmsRepo } from '../../services/api.repo.films';
import { loadFilmsThunk } from '../../slice/film/films.thunk';

export function useFilms() {
  const dispatch = useDispatch<AppDispatch>();
  const repo = useMemo(() => new FilmsRepo(), []);
  const { films } = useSelector((state: RootState) => state.filmsState);

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
