import { SyntheticEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFilms } from '../../hooks/film/use.films';
import './edit.film.scss';

export default function EditFilm() {
  const navigate = useNavigate();

  const { updateFilm, films, loadFilms, filmUpdateState } = useFilms();

  const { id } = useParams();
  const findedFilm = films.find((film) => film.id === id);

  const [findFilm, setFilm] = useState(findedFilm);

  useEffect(() => {
    if (findFilm) {
      setFilm(findFilm);
    }
  }, [findFilm]);

  useEffect(() => {
    loadFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filmUpdateState]);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFilm((prevState) => ({
      ...prevState!,
      [name]: value,
    }));
  };

  const handleUpdateFilm = (event: SyntheticEvent) => {
    event.preventDefault();
    const element = event.target as HTMLFormElement;
    const formData = new FormData(element);
    updateFilm(findFilm!.id, formData);
    navigate('/home/');
  };

  return (
    <>
      <div className="container-edit-form">
        <form className="edit-form" onSubmit={handleUpdateFilm} role="form">
          <input
            type="text"
            name="title"
            // value={findedFilm?.title}
            onChange={handleInputChange}
            placeholder="title"
          />
          <input
            type="text"
            name="director"
            // value={findedFilm?.director}
            onChange={handleInputChange}
            placeholder="director"
          />
          <input
            type="text"
            name="about"
            // value={findedFilm?.about}
            onChange={handleInputChange}
            placeholder="about"
          />
          <input
            type="number"
            name="decade"
            // value={findedFilm?.about}
            onChange={handleInputChange}
            placeholder="decade"
          />
          <div className="add-file" id="add-file">
            <div className="file-select" id="src-file1">
              <input type="file" name="image" onChange={handleInputChange} />
            </div>
          </div>

          <button className="save-button" type="submit">
            EDIT
          </button>
        </form>
      </div>
      <div className="cancel-button">
        <Link to={'/home'}>
          <button type="button">CANCEL</button>
        </Link>
      </div>
    </>
  );
}
