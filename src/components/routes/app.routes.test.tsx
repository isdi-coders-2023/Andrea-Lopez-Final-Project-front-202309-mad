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
          <AppRoutes></AppRoutes>
        </Provider>
      </Router>
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
