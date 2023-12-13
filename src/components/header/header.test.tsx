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
});
