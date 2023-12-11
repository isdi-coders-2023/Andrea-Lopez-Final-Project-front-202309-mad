import './footer.scss';

export function Footer() {
  const cloudinaryImageUrl =
    'https://res.cloudinary.com/dgnncaecc/image/upload/v1702295679/Footer_Logo_l9epde.png';
  return (
    <footer>
      <div className="logo-footer" />
      <img
        src={cloudinaryImageUrl}
        alt="Footer Logo"
        width="100"
        height="100"
      />
      <div className="logo-text" />
      <p>逆説</p>
    </footer>
  );
}
