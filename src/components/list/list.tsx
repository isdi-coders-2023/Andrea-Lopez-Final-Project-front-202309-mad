import { useEffect } from 'react';
import { Card } from '../card/card';
import { useFilms } from '../../hooks/film/use.films';
import { Film } from '../../entities/film';
import './list.scss';
import { useNavigate, useParams } from 'react-router-dom';

export function List() {
  const { loadFilms } = useFilms();

  useEffect(() => {
    loadFilms();
  }, [loadFilms]);

  const navigate = useNavigate();
  const { loadFilmsByPage, films } = useFilms();

  const { page } = useParams();

  const goToNextPage = () => {
    const newPage = Number(page!) + 1;
    navigate(`/home/page/${newPage}`);
  };

  const goToPreviousPage = () => {
    const newPage = Number(page!) - 1;
    navigate(`/home/page/${newPage}`);
  };

  useEffect(() => {
    loadFilmsByPage(page!);
  }, [loadFilmsByPage, page]);

  return (
    <>
      <>
        <ul className="films-list">
          {films.map((film: Film) => (
            <Card key={film.id} film={film}></Card>
          ))}
        </ul>
        {Number(page!) > 1 && (
          <div className="pagination-button" onClick={goToPreviousPage}>
            <img
              src="https://res.cloudinary.com/dgnncaecc/image/upload/v1702908414/Button_Previous_Page_wno2u8.png"
              alt="Prevoius Page"
              width="30"
              height="30"
            />
          </div>
        )}
        {films.length > 0 ? (
          <div className="pagination-button" onClick={goToNextPage}>
            <img
              src="https://res.cloudinary.com/dgnncaecc/image/upload/v1702908580/next_jd2y2j.png"
              alt="Next Page"
              width="30"
              height="30"
            />
          </div>
        ) : (
          <div className="loading-text">
            <p>Loading for new films to come</p>
          </div>
        )}
      </>
    </>
  );
}
