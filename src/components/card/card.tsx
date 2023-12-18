import { Link } from 'react-router-dom';
import { Film } from '../../entities/film';
import { useFilms } from '../../hooks/film/use.films';
import EditFilm from '../edit/edit.film';
import './card.scss';

type Props = {
  film: Film;
};

export function Card({ film }: Props) {
  const { handleDetailsPage, deleteFilm } = useFilms();

  const handleUpdateFilm = () => {
    return <EditFilm></EditFilm>;
  };

  const handleDeleteFilm = () => {
    deleteFilm(film.id);
  };
  return (
    <>
      <div className="edit-buttons">
        <Link to={'/editfilm/' + film.id}>
          <img
            onClick={handleUpdateFilm}
            role="button"
            width="19"
            height="17"
            src="https://res.cloudinary.com/dgnncaecc/image/upload/v1702840689/edit_button_jijeof.png"
            alt="edit-icon"
          />
        </Link>
      </div>
      <div className="delete-button">
        <img
          onClick={handleDeleteFilm}
          role="button"
          width="19"
          height="17"
          src=" https://res.cloudinary.com/dgnncaecc/image/upload/v1702841652/trash_xulhgx.png"
          alt="delete-icon"
        />
      </div>

      <div className="card-container">
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
    </>
  );
}
