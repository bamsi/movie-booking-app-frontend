const SELECTED_MOVIE = 'movie/movies/SELECTED_MOVIE';

const initialState = {
  list: [],
};

export const selectMovie = (data) => ({
  type: SELECTED_MOVIE,
  data,
});

const movie = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_MOVIE:
      return {
        list: action.data.data,
      };
    default:
      return state;
  }
};

export default movie;
