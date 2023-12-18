import './footer.scss';

export function Footer() {
  const cloudinaryImageUrl =
    'https://res.cloudinary.com/dgnncaecc/image/upload/v1702295679/Footer_Logo_l9epde.png';
  return (
    <footer>
      <div>
        <img
          src="https://res.cloudinary.com/dgnncaecc/image/upload/v1702832914/footer_zaeyw4.png"
          alt="Footer"
          width="95"
          height="75"
        />
      </div>

      <div className="logo-footer" />
      <img src={cloudinaryImageUrl} alt="Footer Logo" width="90" height="130" />
    </footer>
  );
}
