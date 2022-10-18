const FETCH_MOVIES = 'movie/movies/FETCH_MOVIES';

const initialState = {
  list: [],
  prev_page: null,
  next_page: null,
};

const baseUrl = 'http://127.0.0.1:3000/api/v1';

const fetchMoviesSuccess = (data) => ({
  type: FETCH_MOVIES,
  data,
});

const movies = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        list: action.data.data,
        prev_page: action.data.prev_page,
        next_page: action.data.next_page,
      };
    default:
      return state;
  }
};

const fetchMovies = (page) => async (dispatch) => {
  const requestConfig = {
    url: `${baseUrl}/movies/latest_movies/page/${page}`,
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
    dispatch(fetchMoviesSuccess(obj));
  }
};

const addMovie = async (payload) => {
  const requestConfig = {
    url: `${baseUrl}/movies`,
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
  return { status: response.status, data: obj };
};

export { fetchMovies, addMovie };
export default movies;
