import { useEffect } from 'react';
import { Film } from '../../entities/film';
import { filmsHook } from '../../hooks/film/films.hook';
import { Card } from '../card/card';

type Props = {
  filmsToRender: Film[] | undefined;
};

export function List({ filmsToRender }: Props) {
  const { loadFilms } = filmsHook();

  useEffect(() => {
    loadFilms();
  }, [loadFilms]);

  return (
    <>
      <ul className="film-list">
        {filmsToRender?.map((item: Film) => (
          <Card key={item.id} film={item}></Card>
        ))}
      </ul>
    </>
  );
}
