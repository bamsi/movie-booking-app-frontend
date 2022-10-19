import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { makeBooking } from '../../redux/booking/bookings';
import { fetchMovies } from '../../redux/movie/movies';
import HomeButton from '../../layout/homeButton';
import { getCurrentUser } from '../../redux/authentication/authentication';

function NewBooking() {
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movies.list);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const user = getCurrentUser();
  const [values, setValues] = useState({
    city: '',
    date: new Date(),
    movie_id: '',
    user_id: user.user.id,
  });

  const handleCityChange = (e) => {
    setValues({
      ...values,
      city: e.target.value,
    });
  };

  const handleDateChange = (bookedDate) => {
    setValues({
      ...values,
      date: bookedDate,
    });
  };

  const handleMovieChange = (e) => {
    setValues({
      ...values,
      movie_id: e.target.value,
    });
  };

  const submitRequest = (event) => {
    event.preventDefault();
    if (
      values.city === ''
      || values.date === ''
      || values.movie_id === ''
    ) {
      setError('Please fill all required fields');
    } else {
      dispatch(makeBooking(values));
    }
    navigate('/bookings');
    window.location.reload();
  };

  return (
    <div>
      NewBooking
      <div className="d-flex aligns-items-center justify-content-center h-100 d-inline-block">
        <div className="card align-self-center p-4" style={{ width: '28rem' }}>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={submitRequest}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                value={values.city}
                onChange={handleCityChange}
              />
            </div>

            <div className="mb-3">
              <select
                className="form-select"
                aria-label="Select movie"
                onChange={handleMovieChange}
              >
                <option value="">--select movie--</option>
                {movies.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <DatePicker
                selected={values.date}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat="Pp"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <div className="align-self-end">
            <HomeButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBooking;
