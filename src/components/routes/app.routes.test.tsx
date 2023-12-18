import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('AppRoutes', () => {
  test('renders routes correctly', () => {
    render(
      <Router>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </Router>
    );

    expect(screen.getByRole('main')).toBeInTheDocument();

    const routes = [
      { path: '/register', element: 'RegisterPage' },
      { path: '/login', element: 'LoginPage' },
      { path: '/', element: 'HomePage' },
      { path: '/home', element: 'HomePage' },
      { path: '/profile', element: 'Profile' },
      { path: '/details/:id', element: 'Details' },
      { path: '/addfilm', element: 'AddFilm' },
      { path: '/editfilm/:id', element: 'EditFilm' },
    ];

    routes.forEach(({ path, element }) => {
      const routeElement = screen.getByTestId(`${element}-route`);
      expect(routeElement).toBeInTheDocument();
      expect(routeElement).toHaveAttribute('path', path);
    });
  });
});
