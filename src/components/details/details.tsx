import './details.scss';
import { useFilms } from '../../hooks/film/use.films';

export default function Details() {
  const { currentFilm } = useFilms();

  return (
    <div className="details-container">
      <div className="film-title">
        <p className="film-title">{currentFilm?.title}</p>
      </div>
      <div className="film-director">
        <p className="film-director">{currentFilm?.director}</p>
      </div>
      <div className="film-about">
        <p className="film-about">{currentFilm?.about}</p>
      </div>
      <div className="film-decade">
        <p className="film-decade">{currentFilm?.decade}</p>
      </div>
      <div className="film-country">
        <p className="film-country">{currentFilm?.country}</p>
      </div>
    </div>
  );
}
