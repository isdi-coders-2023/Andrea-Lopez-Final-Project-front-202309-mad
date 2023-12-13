import { Link } from 'react-router-dom';
import './header.scss';

export function Header() {
  const cloudinaryImageUrl =
    'https://res.cloudinary.com/dgnncaecc/image/upload/v1702295124/Header_Logo_ql4vnu.png';
  return (
    <header>
      <div className="logo-container">
        <img
          src={cloudinaryImageUrl}
          alt="Header Logo"
          width="100"
          height="auto"
        />
      </div>
      <Link to={'/home'}>
        <p>HOLA ESTO ES UN LINK</p>
      </Link>
    </header>
  );
}
