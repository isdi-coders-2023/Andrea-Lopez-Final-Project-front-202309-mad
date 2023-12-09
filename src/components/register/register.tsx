import { SyntheticEvent, useState } from 'react';
import { User } from '../../entities/user';
import { usersHook } from '../../hooks/users.hook';

export function Register() {
  const [hasRegister, setHasRegister] = useState(false);
  const { register } = usersHook();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const newUser = {
      name: (formElement.elements.namedItem('name') as HTMLInputElement).value,
      surname: (formElement.elements.namedItem('name') as HTMLInputElement)
        .value,
      email: (formElement.elements.namedItem('email') as HTMLInputElement)
        .value,
      passwd: (formElement.elements.namedItem('passwd') as HTMLInputElement)
        .value,
    } as Partial<User>;
    register(newUser);
    setHasRegister(true);
  };

  return (
    <>
      <div className="register-form">
        {!hasRegister && (
          <form onSubmit={handleSubmit} name="form">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" required />
            <label htmlFor="surname">Surname: </label>
            <input type="text" name="surname" required />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" required />
            <label htmlFor="passwd">Password: </label>
            <input type="password" name="passwd" required />
            <button className="button-register" type="submit">
              Register
            </button>
            <p className="register-button">hola</p>
          </form>
        )}
        {hasRegister}
      </div>
    </>
  );
}
