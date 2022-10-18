/* eslint-disable camelcase */
import { NotificationManager } from 'react-notifications';
import axios from '../../config/axios';
import localStorages from '../../helpers/localStorage';

const GET_DATA = 'movie_booking_app_frontend/booking/getData';
const CREATE_RESERVE = 'movie_booking_app_frontend/booking/RESERVE';
const DELETE_BOOKING = 'movie_booking_app_frontend/booking/deleteBooking';

const { id } = localStorages.getUser().user || '';
const userID = id;

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const createReserve = (payload) => ({
  type: CREATE_RESERVE,
  payload,
});

export const deleteBooking = (id) => ({
  type: DELETE_BOOKING,
  id,
});

export const deleteBookingAction = (payload) => async (dispatch) => {
  axios
    .delete(`/api/v1/users/${userID}/bookings/${payload}`)
    .then((res) => {
      dispatch(deleteBooking(res.data));
    });
};

export const fetchData = () => async (dispatch) => {
  // eslint-disable-next-line no-template-curly-in-string
  const url = `/api/v1/users/${userID}/bookings/`;
  const response = await axios.get(url);
  const data = await response.data;
  const arr = [];
  data.forEach((element) => {
    const { city, date, id } = element;
    const { title } = element.movie;
    arr.push({
      bookingId: id,
      cityName: city,
      dateReserved: date,
      movieName: title,
    });
  });
  dispatch(getData(arr));
};

export const reserveAction = (payload) => async (dispatch) => {
  axios
    .post(`/api/v1/users/${payload.user_id}/bookings`, payload)
    .then((res) => {
      dispatch(createReserve(res.data));
      NotificationManager.success(
        'You have reserved a movie!',
        'Successful!',
        2000,
      );
    })
    .catch((error) => {
      dispatch(createReserve(error.response.data));
      NotificationManager.error('Error while creating the Reservation!', 'Error!');
    });
};

export default function bookingReducer(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    case CREATE_RESERVE:
      return [...state, action.payload];
    case DELETE_BOOKING:
      return state.filter((booking) => booking.bookingId !== action.payload.id);

    default:
      return state;
  }
}
