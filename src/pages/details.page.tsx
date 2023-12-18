import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function Details() {
  const { currentFilm } = useSelector((state: RootState) => state.filmsState);

  return (
    <div className="hola">
      {/* <div className="film-image">
        <p className="film-image">{currentFilm?.image.cloudinaryURL}</p>
      </div> */}
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
