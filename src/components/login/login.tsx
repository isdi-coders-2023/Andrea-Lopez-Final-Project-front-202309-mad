import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserLogin } from '../../entities/user';
import { usersHook } from '../../hooks/users.hook';

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
      <div className="login-form-container">
        <div className="login-form-h2">
          <h2>Welcome Back, Log in</h2>
        </div>
        {!hasLogin && (
          <form
            onSubmit={handleSubmit}
            className="login-form"
            aria-label="form"
          >
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
          </form>
        )}
      </div>
      {hasLogin && <div></div>}
    </>
  );
}
