const SELECTED_MOVIE = 'movie/movies/SELECTED_MOVIE';

const baseUrl = 'http://127.0.0.1:3000/api/v1';

export const selectMovie = (movie) => ({
  type: SELECTED_MOVIE,
  payload: movie,
});

const movie = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_MOVIE:
      return {
        ...payload,
      };
    default:
      return state;
  }
};

const getMovieDetails = (movieId) => async (dispatch) => {
  const requestConfig = {
    url: `${baseUrl}/movies/${movieId}`,
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
    dispatch(selectMovie(obj[0]));
  }
};

export { getMovieDetails };
export default movie;
