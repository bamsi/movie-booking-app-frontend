const FETCH_BOOKINGS = 'booking/bookings/FETCH_BOOKINGS';
const BOOK_MOVIE = 'booking/bookings/BOOK_MOVIE';
const DELETE_MOVIE = 'booking/bookings/DELETE_MOVIE';

const baseUrl = 'https://moviebiskop.herokuapp.com/api/v1';

const initialState = {
  list: [],
};

const fetchAllBookings = (data) => ({
  type: FETCH_BOOKINGS,
  data,
});

const createBooking = (data) => ({
  type: BOOK_MOVIE,
  data,
});

const destroyBookings = (id) => ({
  type: DELETE_MOVIE,
  id,
});

const fetchBookings = (userId) => async (dispatch) => {
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

const makeBooking = (payload) => async (dispatch) => {
  const requestConfig = {
    url: `${baseUrl}/users/${payload.user_id}/bookings`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload,
  };

  const response = await fetch(requestConfig.url, {
    method: requestConfig.method,
    headers: requestConfig.headers,
    body: JSON.stringify(requestConfig.body),
  });
  const obj = await response.json();
  if (response.ok) {
    dispatch(createBooking(obj));
  }
};

const deleteBooking = (payload, userId) => async (dispatch) => {
  const requestConfig = {
    url: `${baseUrl}/users/${userId}/bookings/${payload}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload,
  };

  const response = await fetch(requestConfig.url, {
    method: requestConfig.method,
    headers: requestConfig.headers,
    body: JSON.stringify(requestConfig.body),
  });
  const obj = await response.json();
  if (response.ok) {
    dispatch(destroyBookings(obj));
  }
};

const bookings = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKINGS:
      return {
        list: action.data,
      };
    case BOOK_MOVIE:
      return {
        list: [...state.list, action.data],
      };
    case DELETE_MOVIE:
      return {
        list: [
          state.filter((booking) => booking.bookingId !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export { fetchBookings, makeBooking, deleteBooking };
export default bookings;
