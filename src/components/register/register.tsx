import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../entities/user';
import { usersHook } from '../../hooks/users.hook';

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
      <h2>Create your new Account🎆</h2>

      {!hasRegister && (
        <form
          onSubmit={handleSubmit}
          className="register-form"
          aria-label="form"
        >
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Password</label>
          <input type="password" name="passwd" required />
          <label>Name</label>
          <input type="text" name="name" required />
          <label>Surname</label>
          <input type="text" name="surname" required />
          <div className="signup-button">
            <button type="submit">Sign Up</button>
          </div>
          <div className="cancel-button">
            <Link to={'/home/'}>
              <button type="button">Back Home</button>
            </Link>
          </div>
        </form>
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
