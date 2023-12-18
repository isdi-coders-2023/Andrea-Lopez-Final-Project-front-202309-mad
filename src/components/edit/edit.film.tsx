import { SyntheticEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFilms } from '../../hooks/film/use.films';
import './edit.film.scss';

export default function EditFilm() {
  const navigate = useNavigate();

  const { updateFilm, films, loadFilms, filmUpdateState } = useFilms();

  const { id } = useParams();
  const findedFilm = films.find((film) => film.id === id);

  const [findCar, setCar] = useState(findedFilm);

  useEffect(() => {
    if (findCar) {
      setCar(findCar);
    }
  }, [findCar]);

  useEffect(() => {
    loadFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filmUpdateState]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setCar((prevState) => ({
      ...prevState!,
      [name]: value,
    }));
  };

  const handleUpdateFilm = (event: SyntheticEvent) => {
    event.preventDefault();
    const element = event.target as HTMLFormElement;
    const formData = new FormData(element);
    updateFilm(findCar!.id, formData);
    navigate('/profile');
  };

  return (
    <>
      <div className="container-edit-form">
        <div className="form-edit-tittle">
          <h3>Edit Film</h3>
        </div>
        <form
          className="edit-form"
          onSubmit={handleUpdateFilm}
          aria-label="form"
        >
          <input
            type="text"
            name="title"
            value={findedFilm?.title}
            onChange={handleInputChange}
            placeholder="title"
            required
          />
          <input
            type="text"
            name="director"
            value={findedFilm?.director}
            onChange={handleInputChange}
            placeholder="director"
          />
          <input
            type="text"
            name="about"
            value={findedFilm?.about}
            onChange={handleInputChange}
            placeholder="about"
            required
          />
          <input
            type="number"
            name="decade"
            value={findedFilm?.decade}
            onChange={handleInputChange}
            placeholder="decade"
            required
          />
          <input
            type="text"
            name="country"
            value={findedFilm?.country}
            onChange={handleInputChange}
            placeholder="country"
            required
          />
          <div className="add-file" id="add-file">
            <input type="file" name="image" aria-label="file" />
          </div>
          <div className="create-film-button">
            <button type="submit">OK! MODIFY FILM</button>
          </div>
          <div className="cancel-create-film-button">
            <Link to={'/home/'}>
              <button type="button">CANCEL</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
