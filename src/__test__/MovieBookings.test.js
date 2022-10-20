import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MovieBookings from '../components/bookings/MovieBookings';
import { Route } from 'react-router';

const user ={
    user: {
        id: 1,
        name: 'happen'
    }
}
const bookings = [
  {
    bookedDate: '2022-02-02',
    bookingId: 1,
    movieTitle: 'Star wars',
    cityName: 'Jozi',
    moviePicture:
      'https://image.shutterstock.com/image-vector/hawaii-beach-bar-retro-sign-600w-2156338567.jpg',
  },
];

describe('testing the rendering of the movie bookings page', () => {
  it('', () => {
    const { container } = render(
      <Provider store={store}>
        <MovieBookings bookings={bookings} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
