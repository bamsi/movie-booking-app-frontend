const LOGIN = 'movie/authentication/LOGIN';

const initialState = {
  user: {},
};

const baseUrl = 'http://127.0.0.1:3000/api/v1';

const readUser = () => (localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null);

const loggedIn = () => {
  if (readUser() != null) {
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem('user');
};

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

const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));

const login = async (payload) => {
  const requestConfig = {
    url: `${baseUrl}/login`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: { user: payload },
  };

  const response = await fetch(requestConfig.url, {
    method: requestConfig.method,
    headers: requestConfig.headers,
    body: JSON.stringify(requestConfig.body),
  });
  const obj = await response.json();
  if (response.ok) {
    localStorage.setItem('user', JSON.stringify(obj));
  }
  return { status: response.status, data: obj };
};

const signup = async (payload) => {
  const requestConfig = {
    url: `${baseUrl}/users`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: { user: payload },
  };

  const response = await fetch(requestConfig.url, {
    method: requestConfig.method,
    headers: requestConfig.headers,
    body: JSON.stringify(requestConfig.body),
  });
  const obj = response.json();
  if (response.ok) {
    localStorage.setItem('user', JSON.stringify(obj));
  }
  return { status: response.status, data: obj };
};

export {
  login, loggedIn, logout, signup, getCurrentUser,
};
export default auths;
