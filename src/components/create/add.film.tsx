import { Link, useNavigate } from 'react-router-dom';
import { useFilms } from '../../hooks/film/use.films';
import './add.film.scss';
import { SyntheticEvent } from 'react';

export default function AddFilm() {
  const navigate = useNavigate();
  const { createFilm } = useFilms();

  const handleCreateFilm = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    createFilm(formData);
    navigate('/home/');
  };

  return (
    <>
      <div className="container-create-form">
        <div className="form-create-tittle"></div>
        <form className="create-form" onSubmit={handleCreateFilm}>
          <input type="text" name="title" placeholder="title" required />
          <input type="text" name="director" placeholder="director" required />
          <input type="text" name="about" placeholder="about" required />
          <input type="number" name="decade" placeholder="decade" required />
          <input type="text" name="country" placeholder="country" required />
          <div className="add-file" id="add-file">
            <input type="file" name="image" />
          </div>
          <button className="save-button" type="submit">
            CREATE FILM
          </button>
        </form>
      </div>
      <div className="cancel-button">
        <Link to={'/home/'}>
          <button type="button">CANCEL</button>
        </Link>
      </div>
    </>
  );
}
