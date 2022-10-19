const SELECTED_MOVIE = 'movie/movies/SELECTED_MOVIE';

export const selectMovie = (movie) => ({
  type: SELECTED_MOVIE,
  payload: movie,
});

const movie = (state = {}, { type, payload }) => {
  // console.log(payload);
  switch (type) {
    case SELECTED_MOVIE:
      return {
        ...state, ...payload,
      };
    default:
      return state;
  }
};

export default movie;
