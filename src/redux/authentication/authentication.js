import axios from 'axios';

const LOGIN = 'movie/authentication/LOGIN';

const initialState = {
  user: {},
};

const baseUrl = 'http://127.0.0.1:3000';

const readUser = () =>
  localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;

const loggedIn = () => {
  if (readUser() != null) {
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem('user');
};
/** define actions */
const loginSuccess = (data) => ({
  type: LOGIN,
  data,
});

const auths = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.data,
      };
    default:
      return state;
  }
};

const login = (data) => (dispatch) => {
  axios
    .post({
      method: 'post',
      url: `${baseUrl}/login`,
      data,
    })
    .then((response) => {
      const { data } = response;
      localStorage.setItem('user', JSON.stringify(data));
      dispatch(loginSuccess(data));
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export { login, loggedIn, logout };
export default auths;
