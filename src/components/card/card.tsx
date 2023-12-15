import { Film } from '../../entities/film';
import { useFilms } from '../../hooks/film/use.films';
import './card.scss';
import { Link } from 'react-router-dom';

type Props = {
  film: Film;
};

export function Card({ film }: Props) {
  const { handleDetailsPage } = useFilms();
  return (
    <div className="hola">
      <Link to={'/details/' + film.id} style={{ textDecoration: 'none' }}>
        <article>
          <figure>
            <img
              src={film.image.cloudinaryURL}
              alt={`imagen de ${film.title} `}
              onClick={() => handleDetailsPage(film)}
              width="300"
              height="400"
            />
          </figure>
        </article>
      </Link>
      <div className="card-container">
        <div className="card-title">
          <p className="text-title">{film.title}</p>
        </div>
        <div className="card-director">
          <p className="text-director">{film.director}</p>
        </div>
      </div>
    </div>
  );
}
