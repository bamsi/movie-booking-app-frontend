import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../../layout/homeButton';
import { fetchCategories } from '../../redux/category/categories';
import { fetchGenres } from '../../redux/genre/genres';
import { addMovie } from '../../redux/movie/movies';
import { getCurrentUser } from '../../redux/authentication/authentication';

const AddMovie = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);
  useEffect(() => {
    if (!categories.length) dispatch(fetchCategories());
  }, []);
  const genres = useSelector((state) => state.genres.list);
  useEffect(() => {
    if (!genres.length) dispatch(fetchGenres());
  }, []);

  const user = getCurrentUser();
  const [values, setValues] = useState({
    title: '',
    description: '',
    duration: '',
    time: new Date(),
    category_id: '',
    genre_id: '',
    picture: '',
    user_id: user.user.id,
  });

  const handleTitleChange = (e) => {
    setValues({
      ...values,
      title: e.target.value,
    });
  };

  const handleCategoryChange = (e) => {
    setValues({
      ...values,
      category_id: e.target.value,
    });
  };

  const handleGenreChange = (e) => {
    setValues({
      ...values,
      genre_id: e.target.value,
    });
  };

  const handleDurationChange = (e) => {
    setValues({
      ...values,
      duration: e.target.value,
    });
  };

  const handleTimeChange = (date) => {
    setValues({
      ...values,
      time: date,
    });
  };

  const handlePictureChange = (e) => {
    setValues({
      ...values,
      picture: e.target.value,
    });
  };

  const handleDescriptionChange = (e) => {
    setValues({
      ...values,
      description: e.target.value,
    });
  };

  const submitRequest = (event) => {
    event.preventDefault();
    if (
      values.title === ''
      || values.description === ''
      || values.category_id === ''
      || values.genre_id === ''
      || values.picture === ''
      || values.time === ''
      || values.duration === ''
    ) {
      setError('Please fill all required fields');
    } else {
      const response = addMovie(values);
      response.then((data) => {
        if (data.status !== 200) {
          setError('Failed to add movie');
        } else {
          navigate('/home');
        }
      });
    }
  };
  return (
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
              Title
            </label>
            <input
              type="text"
              className="form-control"
              value={values.title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              aria-label="Select movie category"
              onChange={handleCategoryChange}
            >
              <option value="">--select categories--</option>
              {categories.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <select
              className="form-select"
              aria-label="Select genre"
              onChange={handleGenreChange}
            >
              <option value="">--select genres--</option>
              {genres.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Description"
              value={values.description}
              onChange={handleDescriptionChange}
            />
            <label htmlFor="description">Description</label>
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Duration
            </label>
            <input
              type="number"
              className="form-control"
              value={values.duration}
              onChange={handleDurationChange}
            />
          </div>
          <div className="mb-3">
            <DatePicker
              selected={values.time}
              onChange={handleTimeChange}
              showTimeSelect
              dateFormat="Pp"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="picture" className="form-label">
              Picture URL
            </label>
            <input
              type="text"
              className="form-control"
              value={values.picture}
              onChange={handlePictureChange}
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
  );
};
export default AddMovie;
