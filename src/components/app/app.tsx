// app.component.jsx
import { useEffect } from 'react';
import { usersHook } from '../../hooks/users.hook';
import { AppRoutes } from '../routes/app.routes';

export function App() {
  const { login } = usersHook();

  useEffect(() => {
    login({
      email: '',
      passwd: '',
    });
  }, []);

  return <AppRoutes></AppRoutes>;
}
