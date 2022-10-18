import { getCurrentUser } from '../../redux/authentication/authentication';

const FETCH_BOOKINGS = 'booking/bookings/FETCH_BOOKINGS';
//const RESERVE_MOVIE = 'booking/bookings/RESERVE_MOVIE';
//const BOOK_MOVIE = 'booking/bookings/BOOK_MOVIE';

const baseUrl = 'http://127.0.0.1:3000/api/v1';

const user = getCurrentUser();
const user_id = user.user.id;
console.log(user_id);

const fetchAllBookings = (data) => ({
  type: FETCH_BOOKINGS,
  data
});

const fetchBookings = () => async (dispatch) => {
  const requestConfig = {
    url: `${baseUrl}/users/${user_id}/bookings`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(requestConfig.url, {
    method: requestConfig.method,
    headers: requestConfig.headers,
    body: JSON.stringify(requestConfig.body),
  });
  const obj = await response.json();
  if (response.ok) {
    dispatch(fetchAllBookings(obj));
  }
}

export default fetchBookings;