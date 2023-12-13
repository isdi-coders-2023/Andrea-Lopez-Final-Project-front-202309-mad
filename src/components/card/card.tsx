import { Film } from '../../entities/film';

type Props = {
  film: Film;
};

export function Card({ film }: Props) {
  return <li className="card"></li>;
}
