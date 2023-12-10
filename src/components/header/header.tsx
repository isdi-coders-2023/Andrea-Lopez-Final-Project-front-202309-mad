import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <Link to={'/home'}>
        <p>klk</p>
      </Link>
      <h1>Hola</h1>
    </header>
  );
}
