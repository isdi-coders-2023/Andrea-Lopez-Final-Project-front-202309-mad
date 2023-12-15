import { Film } from '../../entities/film';
import './card.scss';
import { Link } from 'react-router-dom';

type Props = {
  film: Film;
};

export function Card({ film }: Props) {
  return (
    <Link to={`/details/${film.id}`}>
      <div className="hola">
        <article>
          <figure>
            <img
              src={film.image.cloudinaryURL}
              alt={`imagen de ${film.title} `}
              width="300"
              height="400"
            />
          </figure>
        </article>
        <div className="card-container">
          <div className="card-title">
            <p className="text-title">{film.title}</p>
          </div>
          <div className="card-director">
            <p className="text-director">{film.director}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
