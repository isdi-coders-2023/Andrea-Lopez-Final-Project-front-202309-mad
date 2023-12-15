import { Link } from 'react-router-dom';
import './header.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function Header() {
  const cloudinaryImageUrl =
    'https://res.cloudinary.com/dgnncaecc/image/upload/v1702295124/Header_Logo_ql4vnu.png';

  const { loggedUser } = useSelector((state: RootState) => state.usersState);
  return (
    <header>
      <div className="logo-container">
        <img
          src={cloudinaryImageUrl}
          alt="Header Logo"
          width="100"
          height="100"
        />
      </div>
      <Link to={'/home'}>
        <p>Home</p>
      </Link>
      <Link to={'/addfilm'}>
        <p>Crea una peli</p>
      </Link>
      <section>
        {loggedUser && (
          <>
            <h1>Bienvenido {loggedUser.name}</h1>
          </>
        )}
      </section>
    </header>
  );
}
