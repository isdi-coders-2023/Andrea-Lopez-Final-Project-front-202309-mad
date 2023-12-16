import './header.scss';
import { HeaderHome } from '../header.home/header.home';

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
          height="100"
        />
      </div>
      <HeaderHome></HeaderHome>
    </header>
  );
}
