import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Main from '../components/movies/main';

const movies = [
  {
    description: 'this is a test movie',
    id: 1,
    title: 'Star wars',
    picture:
      'https://image.shutterstock.com/image-vector/hawaii-beach-bar-retro-sign-600w-2156338567.jpg',
  },
];

describe('testing the rendering of the main page', () => {
  it('', () => {
    const { container } = render(
      <Provider store={store}>
        <Main movies={movies} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
