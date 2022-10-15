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

const login = async (payload) => {
  const requestConfig = {
    url: `${baseUrl}/login`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload,
  };
  try {
    const response = await fetch(requestConfig.url, {
      method: requestConfig.method,
      headers: requestConfig.headers,
      body: JSON.stringify(requestConfig.body),
    });
    if (!response.ok) {
      throw new Error('Request failed!');
    }
    const obj = await response.json();
    localStorage.setItem('user', JSON.stringify(obj.data));
  } catch (err) {
    throw new Error(err);
  }
};

export { login, loggedIn, logout };
export default auths;
