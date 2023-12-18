import { store } from '../../store/store';
import { Header } from './header';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Given Header class...', () => {
  render(
    <Router>
      <Provider store={store}>
        <Header></Header>
      </Provider>
    </Router>
  );
  describe('When we instantiate Header', () => {
    test('Then it should be in the document', () => {
      const element = screen.getAllByRole('banner');
      expect(element).toBeInTheDocument();
    });
  });
  test('It should display the logo', () => {
    const logoElement = screen.getByAltText('Header Logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('It should contain Home link', () => {
    const homeLinkElement = screen.getByText('Home');
    expect(homeLinkElement).toBeInTheDocument();
  });
  test('It should contain "Crea una peli" link', () => {
    const creaUnaPeliLinkElement = screen.getByText('Crea una peli');
    expect(creaUnaPeliLinkElement).toBeInTheDocument();
  });

  test('It should not display welcome message without logged user', () => {
    const welcomeMessage = screen.queryByText(/Bienvenido/i);
    expect(welcomeMessage).toBeNull();
  });

  test('It should display welcome message with logged user', () => {
    const welcomeMessage = screen.getByText(/Bienvenido/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
});
