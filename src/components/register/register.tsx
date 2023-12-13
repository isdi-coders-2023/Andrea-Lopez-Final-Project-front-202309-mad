import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../entities/user';
import { usersHook } from '../../hooks/users/users.hook';
import './register.scss';
export function Register() {
  const [hasRegister, setHasRegister] = useState(false);
  const { register } = usersHook();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const data = {
      email: (formElement.elements.namedItem('email') as HTMLInputElement)
        .value,
      passwd: (formElement.elements.namedItem('passwd') as HTMLInputElement)
        .value,
      name: (formElement.elements.namedItem('name') as HTMLInputElement).value,
      surname: (formElement.elements.namedItem('surname') as HTMLInputElement)
        .value,
    } as Partial<User>;
    register(data);
    setHasRegister(true);
  };

  return (
    <>
      {!hasRegister && (
        <div className="super-container">
          <form
            onSubmit={handleSubmit}
            className="container-register-form"
            aria-label="form"
          >
            <div className="register-form">
              <h2 className="register-tittle">SIGN UP🎆</h2>
              <input type="email" name="email" placeholder="E-mail" required />
              <input
                type="password"
                name="passwd"
                placeholder="Password"
                required
              />
              <input type="text" name="name" placeholder="Name" required />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                required
              />
              <input type="text" name="age" placeholder="Age" required />

              <div className="form-buttons">
                <button type="submit">Sign Up</button>
                <button type="button">Back Home</button>
              </div>
            </div>
          </form>
        </div>
      )}
      {hasRegister && (
        <div>
          <Link to={'/home/'}>
            <button type="button">HOME</button>
          </Link>
        </div>
      )}
    </>
  );
}
