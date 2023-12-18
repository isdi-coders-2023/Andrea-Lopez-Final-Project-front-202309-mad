import { Link } from 'react-router-dom';
import { Film } from '../../entities/film';
import { useFilms } from '../../hooks/film/use.films';
import EditFilm from '../edit/edit.film';
import './card.scss';
import { usersHook } from '../../hooks/users/users.hook';

type Props = {
  film: Film;
};

export function Card({ film }: Props) {
  const { handleDetailsPage, deleteFilm } = useFilms();
  const { loggedUser } = usersHook();
  // const location = useLocation();

  const handleUpdateFilm = () => {
    return <EditFilm></EditFilm>;
  };

  const handleDelete = () => {
    deleteFilm(film.id);
  };

  return (
    <>
      {loggedUser && (
        <>
          <div className="delete-button-container">
            <Link to={'/login'}></Link>
            <img
              onClick={handleDelete}
              role="button"
              src=" https://res.cloudinary.com/dgnncaecc/image/upload/v1702841652/trash_xulhgx.png"
              width="19"
              height="17"
              alt="delete-icon"
            />
          </div>
          <div className="update-button-container">
            <Link to={'/editfilm/' + film.id}>
              <img
                role="button"
                width="19"
                height="17"
                src="https://res.cloudinary.com/dgnncaecc/image/upload/v1702840689/edit_button_jijeof.png"
                alt="edit-icon"
                onClick={handleUpdateFilm}
              />
            </Link>
          </div>
        </>
      )}

      <div className="card-container">
        <Link to={'/details/' + film.id} style={{ textDecoration: 'none' }}>
          <article>
            <figure>
              <img
                src={film.image.cloudinaryURL}
                alt={`imagen de ${film.title} `}
                onClick={() => handleDetailsPage(film)}
                width="297"
                height="388"
              />
            </figure>
          </article>
        </Link>
        <div className="card-container-text">
          <div className="card-title">
            <p className="text-title">{film.title}</p>
          </div>
          <div className="card-director">
            <p>{film.director}</p>
          </div>
        </div>
      </div>
    </>
  );
}
