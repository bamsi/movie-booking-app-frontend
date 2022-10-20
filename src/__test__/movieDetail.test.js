import React from 'react';
import { BrowserRouter as Routers } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MovieDetail from '../components/movies/MovieDetail';

const movie = {
  description: 'this is a test movie',
  id: 1,
  title: 'Star wars',
  time: '1.20',
  duration: '20.00',
  picture:
    'https://image.shutterstock.com/image-vector/hawaii-beach-bar-retro-sign-600w-2156338567.jpg',
};

describe('testing the rendering of the movie details page', () => {
  it('', () => {
    const { container } = render(
      <Provider store={store}>
        <Routers>
          <MovieDetail movie={movie} />
        </Routers>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
