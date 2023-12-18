import { useEffect } from 'react';
import { Card } from '../card/card';
import { useFilms } from '../../hooks/film/use.films';
import { Film } from '../../entities/film';
import './list.scss';

type Props = {
  filmsToRender: Film[] | undefined;
};
export function List({ filmsToRender }: Props) {
  const { loadFilms } = useFilms();

  useEffect(() => {
    loadFilms();
  }, [loadFilms]);

  return (
    <>
      <ul className="film-list">
        {filmsToRender?.map((film) => (
          <Card key={film.id} film={film}></Card>
        ))}
      </ul>
    </>
  );
}
