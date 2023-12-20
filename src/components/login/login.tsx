import { SyntheticEvent, useEffect, useState } from 'react';
import { UserLogin } from '../../entities/user';
import { usersHook } from '../../hooks/users/users.hook';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';

export function Login() {
  const { login, loggedUser } = usersHook();
  const navigate = useNavigate();
  const [hasLogin, setHasLogin] = useState(false);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const loginUser: UserLogin = {
      email: formData.get('email')?.toString() as string,
      passwd: formData.get('passwd')?.toString() as string,
    };
    login(loginUser);
    setHasLogin(true);
  };
  useEffect(() => {
    if (hasLogin) {
      navigate('/home/');
    }
  }, [hasLogin, loggedUser]);

  return (
    <>
      {!hasLogin && (
        <form
          onSubmit={handleSubmit}
          className="container-login-form"
          aria-label="form"
        >
          <div className="login-form">
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="passwd"
              placeholder="Contraseña"
              required
            />
            <div className="login-button">
              <button type="submit">LOGIN</button>
            </div>
            <div className="cancel-button">
              <Link to={'/home/'}>
                <img
                  role="button"
                  width="25"
                  height="25"
                  src="https://res.cloudinary.com/dgnncaecc/image/upload/v1702842481/exit_button_hxxswj.png"
                  alt="cancel-icon"
                />
              </Link>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
