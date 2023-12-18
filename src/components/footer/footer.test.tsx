import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { store } from '../../store/store';
import { Footer } from './footer';

describe('Given Footer class..', () => {
  render(
    <Router>
      <Provider store={store}>
        <Footer></Footer>
      </Provider>
    </Router>
  );
  describe('When we instantiate Footer', () => {
    test('Then it should be in the document', () => {
      const element = screen.getAllByRole('img');
      expect(element).toBeInTheDocument();
    });
  });
});
