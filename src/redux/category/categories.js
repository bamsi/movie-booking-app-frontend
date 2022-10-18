const FETCH_CATEGORIES = 'movie/movies/FETCH_CATEGORIES';

const initialState = {
  list: [],
};

const baseUrl = 'http://127.0.0.1:3000/api/v1';

const fetchCategoriesSuccess = (data) => ({
  type: FETCH_CATEGORIES,
  data,
});

const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        list: action.data,
      };
    default:
      return state;
  }
};

const fetchCategories = () => async (dispatch) => {
  const requestConfig = {
    url: `${baseUrl}/categories`,
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
    dispatch(fetchCategoriesSuccess(obj));
  }
};

export { fetchCategories };

export default categories;
