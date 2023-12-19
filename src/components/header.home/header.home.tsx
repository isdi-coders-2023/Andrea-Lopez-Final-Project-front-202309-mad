import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './header.home.scss';
import AddButton from '../create/add.button';

export function HeaderHome() {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);
  const location = useLocation();
  const navigate = useNavigate();
  const isUserFilms = location.pathname === '/userfilms/';

  return (
    <div>
      {!loggedUser && (
        <>
          <div className="login-home-button">
            <Link to={'/login'}>
              <img
                className="button-login-img"
                src="https://res.cloudinary.com/dgnncaecc/image/upload/v1702832372/User_Button_sef25g.png"
                alt="Login icon"
                role="button"
                width="33"
                height="30"
              />
            </Link>
          </div>

          <div className="register-home-button">
            <Link to={'/register'}>
              <img
                src="https://res.cloudinary.com/dgnncaecc/image/upload/v1702832589/Vector-removebg-preview_l36boq.png"
                alt="Register icon"
                role="button"
                width="33"
                height="30"
              />
            </Link>
          </div>
        </>
      )}
      {loggedUser && (
        <div>
          <div>
            <AddButton></AddButton>
          </div>

          <p>Hola {loggedUser.name}</p>
          <button>My Films</button>
        </div>
      )}
    </div>
  );
}
