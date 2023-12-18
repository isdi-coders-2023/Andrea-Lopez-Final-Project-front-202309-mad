import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function HeaderHome() {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);

  return (
    <div>
      {!loggedUser && (
        <>
          <div className="login-home-button">
            <Link to={'/login'}>
              <img
                src="https://res.cloudinary.com/dgnncaecc/image/upload/v1702759665/robot_login_ie3qw0.png"
                alt="Login icon"
                role="button"
                width="35"
                height="auto"
              />
            </Link>

            <p className="p-login">LOG IN</p>
          </div>

          <div className="register-home-button">
            <Link to={'/register'}>
              <img
                src="https://res.cloudinary.com/dgnncaecc/image/upload/v1702763497/register_icon_kcbutt.png"
                alt="Register icon"
                role="button"
                width="35"
                height="auto"
              />
            </Link>
            <p className="p-singup">SIGN UP</p>
          </div>
        </>
      )}
      {loggedUser && (
        <Link to={'/addfilm/'}>
          <p>AÑADIR LOG OUT</p>
        </Link>
      )}
    </div>
  );
}
