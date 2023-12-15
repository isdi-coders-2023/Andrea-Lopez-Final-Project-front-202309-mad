import { useNavigate } from 'react-router-dom';
import { useFilms } from '../../hooks/film/use.films';
import { SyntheticEvent, useEffect, useState } from 'react';

export default function EditFilm() {
  const navigate = useNavigate();
  const { currentFilm, updateFilm } = useFilms();

  const [film, setFilm] = useState(currentFilm);

  useEffect(() => {
    setFilm(currentFilm);
  }, [currentFilm]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFilm((prevState) => ({
      ...prevState!,
      [name]: value,
    }));
  };
  const handleUpdateFilm = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    updateFilm(film!.id, formData);
    navigate('/home/');
  };

  return (
    <>
      <div className="container-create-form">
        <div className="form-create-tittle">
          <h3>Edit Film</h3>
        </div>
        <form
          className="create-form"
          onSubmit={handleUpdateFilm}
          aria-label="form"
        >
          <input
            type="text"
            name="title"
            value={film?.title}
            onChange={handleInputChange}
            placeholder="title"
            required
          />
          <input
            type="text"
            name="director"
            value={film?.director}
            onChange={handleInputChange}
            placeholder="director"
            required
          />
          <input
            type="text"
            name="about"
            value={film?.about}
            onChange={handleInputChange}
            placeholder="about"
            required
          />
          <input
            type="number"
            name="decade"
            value={film?.decade}
            onChange={handleInputChange}
            placeholder="decade"
            required
          />
          <input
            type="text"
            name="country"
            value={film?.country}
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
            <button type="button">CANCEL</button>
          </div>
        </form>
      </div>
    </>
  );
}
