const FETCH_GENRES = 'movie/movies/FETCH_GENRES';

const initialState = {
  list: [],
};

const baseUrl = 'http://127.0.0.1:3000/api/v1';

const fetchGenresSuccess = (data) => ({
  type: FETCH_GENRES,
  data,
});

const genres = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES:
      return {
        list: action.data,
      };
    default:
      return state;
  }
};

const fetchGenres = () => async (dispatch) => {
  const requestConfig = {
    url: `${baseUrl}/genres`,
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
    dispatch(fetchGenresSuccess(obj));
  }
};

export { fetchGenres };

export default genres;
