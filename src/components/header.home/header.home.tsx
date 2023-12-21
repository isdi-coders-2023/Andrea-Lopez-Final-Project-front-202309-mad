import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './header.home.scss';
import AddButton from '../create/add.button';
import styles from './header.home.module.css';

export function HeaderHome() {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);

  return (
    <div>
      {!loggedUser && (
        <>
          <div className="login-home-button">
            <Link to={'/login'}>
              <p>LOG IN</p>
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
              <p>SING UP</p>
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
          <div className={styles.addbutton}>
            <AddButton></AddButton>
          </div>

          <p className={styles.hello}>Hola {loggedUser.name}</p>
          <button>My Films</button>
        </div>
      )}
    </div>
  );
}
