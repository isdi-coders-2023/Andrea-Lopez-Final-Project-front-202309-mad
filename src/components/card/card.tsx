import { Film } from '../../entities/film';
import { makeImageURL } from '../../services/images';

// Añadir link a details

type Props = {
  film: Film;
};

export function Card({ film }: Props) {
  const filmPicture =
    film && film.image && makeImageURL(film?.image.publicId, 150);
  return (
    <div className={card}>
      <article>
        <figure>
          <img src={filmPicture} alt={`imagen de ${film.title} `} />
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
  );
}
