import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, loggedIn } from '../../redux/authentication/authentication';
import HomeButton from '../../layout/homeButton';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const handleUsernameChange = (e) => {
    setValues({
      ...values,
      username: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setValues({
      ...values,
      password: e.target.value,
    });
  };

  const submitRequest = (event) => {
    event.preventDefault();
    try {
      const response = login({
        name: values.username,
        password: values.password,
      });
      response.then(() => {
        if (loggedIn()) {
          navigate('/home');
        } else {
          navigate('/');
        }
      });
    } catch (err) {
      setError('Login Failed');
    }
  };

  return (
    <div className="container-img">
      <div className="d-flex aligns-items-center justify-content-center h-100 d-inline-block">
        <div className="card align-self-center p-4" style={{ width: '28rem' }}>
          {error && (
            <div className="alert alert-primary" role="alert">
              {{ error }}
            </div>
          )}
          <form onSubmit={submitRequest}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                value={values.username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={values.password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </form>
          <div className="align-self-end">
            <HomeButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
