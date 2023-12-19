import { useEffect } from 'react';
import { Card } from '../card/card';
import { Film } from '../../entities/film';
import { useFilms } from '../../hooks/film/use.films';

type Props = {
  filmsToRender: Film[] | undefined;
};
export function List({ filmsToRender }: Props) {
  const { loadFilms } = useFilms();

  useEffect(() => {
    loadFilms();
  }, []);

  return (
    <div className="list-container">
      <div className="list-title-container">
        <h2>Lista</h2>
      </div>
      <ul className="ul-style">
        {filmsToRender?.map((item) => (
          <Card key={item.id} film={item}></Card>
        ))}
      </ul>
    </div>
  );
}
