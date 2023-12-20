import { Link } from 'react-router-dom';
import { usersHook } from '../../hooks/users/users.hook';

export default function AddButton() {
  const { loggedUser } = usersHook();

  return (
    <>
      {loggedUser && (
        <Link to={'/addfilm/'} data-testid="link">
          <img
            role="button"
            src="https://res.cloudinary.com/dgnncaecc/image/upload/v1702819253/create_zuafkt.png"
            height={40}
            width={40}
            alt="Create new film"
          />
        </Link>
      )}
    </>
  );
}
