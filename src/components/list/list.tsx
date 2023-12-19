import { useEffect } from 'react';
import { Card } from '../card/card';
import { Film } from '../../entities/film';
import { useFilms } from '../../hooks/film/use.films';
import './list.scss';

type Props = {
  filmsToRender: Film[] | undefined;
};
export function List({ filmsToRender }: Props) {
  const { loadFilms, films } = useFilms();

  useEffect(() => {
    loadFilms();
  }, [loadFilms]);

  console.log(films);

  return (
    <div className="list-container">
      <ul className="ul-style">
        {filmsToRender?.map((item) => (
          <Card key={item.id} film={item}></Card>
        ))}
      </ul>
    </div>
  );
}
