import { getCurrentUser } from '../authentication/authentication';

const FETCH_BOOKINGS = 'booking/bookings/FETCH_BOOKINGS';

const baseUrl = 'http://127.0.0.1:3000/api/v1';

const initialState = {
  list: [],
};

const user = getCurrentUser();
const userId = user.user.id;

const fetchAllBookings = (data) => ({
  type: FETCH_BOOKINGS,
  data,
});

const fetchBookings = () => async (dispatch) => {
  const requestConfig = {
    url: `${baseUrl}/users/${userId}/bookings`,
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
  const arr = [];
  obj.forEach((element) => {
    const {
      city, date, id, title, picture,
    } = element;

    arr.push({
      bookingId: id,
      cityName: city,
      bookedDate: date,
      movieTitle: title,
      moviePicture: picture,
    });
  });
  if (response.ok) {
    dispatch(fetchAllBookings(arr));
  }
};

const bookings = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKINGS:
      return {
        list: action.data,
      };
    default:
      return state;
  }
};

export { fetchBookings };
export default bookings;
