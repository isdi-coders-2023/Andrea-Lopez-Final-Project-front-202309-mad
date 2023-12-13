import { SyntheticEvent, useState } from 'react';
import { UserLogin } from '../../entities/user';
import { usersHook } from '../../hooks/users/users.hook';
import './login.scss';
import { Link } from 'react-router-dom';

export function Login() {
  const [hasLogin, setHasLogin] = useState(false);
  const { login } = usersHook();

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
  return (
    <>
      {!hasLogin && (
        <form
          onSubmit={handleSubmit}
          className="container-login-form"
          aria-label="form"
        >
          <div className="login-form">
            <h2 className="login-tittle">LOGIN</h2>

            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="passwd"
              placeholder="Contraseña"
              required
            />
            <div className="login-buttons-container">
              <button type="submit">Your account</button>
            </div>
          </div>
        </form>
      )}
      {hasLogin && (
        <div>
          <Link to={'/home/'}>
            <button type="button">HOME</button>
          </Link>
        </div>
      )}
    </>
  );
}
