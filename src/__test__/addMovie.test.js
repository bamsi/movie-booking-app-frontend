import React from 'react';
import { BrowserRouter as Routers } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import AddMovie from '../components/movies/addMovie';

const user = {
  user: { id: 1, name: 'test' },
};
describe('testing the rendering of the add movie page', () => {
  it('', () => {
    const { container } = render(
      <Provider store={store}>
        <Routers>
          <AddMovie user={user} />
        </Routers>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
