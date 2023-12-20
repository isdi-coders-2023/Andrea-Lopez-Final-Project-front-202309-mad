import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../entities/user';
import { usersHook } from '../../hooks/users/users.hook';
import './register.scss/';
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
        <form
          onSubmit={handleSubmit}
          className="container-register-form"
          aria-label="form"
        >
          <div className="register-form">
            <input type="email" name="email" placeholder="E-mail" required />
            <input
              type="password"
              name="passwd"
              placeholder="Password"
              required
            />
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="surname" placeholder="Surname" required />
            <input type="text" name="age" placeholder="Age" required />
          </div>
          <div className="signup-button">
            <button type="submit">SIGN UP</button>
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
        </form>
      )}
      {hasRegister && (
        <div>
          <p>SUCESSFUL</p>
          <Link to={'/login/'}>
            <p>Welcome!!</p>
          </Link>
        </div>
      )}
    </>
  );
}
