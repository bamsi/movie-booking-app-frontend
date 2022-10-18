import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../redux/authentication/authentication';
import HomeButton from '../../layout/homeButton';

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    username: '',
    password: '',
    retypePassword: '',
  });

  const submitRequest = (event) => {
    event.preventDefault();
    const payload = {
      name: values.username,
      password: values.password,
    };
    if (values.password === values.retypePassword) {
      const response = signup(payload);
      response.then((data) => {
        console.log(data);
        if (data.status !== 200) {
          setError('Failed to register user');
        } else {
          navigate('/home');
        }
      });
    } else {
      setError('Password does not match!');
    }
  };

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

  const handleRetypePasswordChange = (e) => {
    setValues({
      ...values,
      retypePassword: e.target.value,
    });
  };

  return (
    <div className="container-img">
      <div className="d-flex aligns-items-center justify-content-center h-100 d-inline-block">
        <div className="card align-self-center p-4" style={{ width: '28rem' }}>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
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
            <div className="mb-3">
              <label htmlFor="retypePassword" className="form-label">
                Retype Password
              </label>
              <input
                type="password"
                className="form-control"
                id="retypePassword"
                value={values.retypePassword}
                onChange={handleRetypePasswordChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign up
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
export default Signup;
