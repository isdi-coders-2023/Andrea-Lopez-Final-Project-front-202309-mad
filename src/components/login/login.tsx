import { SyntheticEvent, useEffect } from 'react';
import { UserLogin } from '../../entities/user';
import { usersHook } from '../../hooks/users/users.hook';
import './login.scss';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const { login, loggedUser } = usersHook();
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const loginUser: UserLogin = {
      email: formData.get('email')?.toString() as string,
      passwd: formData.get('passwd')?.toString() as string,
    };
    login(loginUser);
  };
  useEffect(() => {
    if (loggedUser) {
      navigate('/home');
    }
  }, [loggedUser]);
  return (
    <>
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
    </>
  );
}
