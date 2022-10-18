import React, { useState } from 'react';
import HomeButton from '../../layout/homeButton';

const AddMovie = () => {
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    title: '',
    description: '',
    duration: '',
    time: '',
    category_id: '',
    genre_id: '',
    picture: '',
  });

  const handleTitleChange = (e) => {
    setValues({
      ...values,
      title: e.target.value,
    });
  };

  const submitRequest = (event) => {
    event.preventDefault();
    if (values.title === '') {
      setError('Please fill all required fields');
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

          <button type="submit" className="btn btn-primary">
            Sign up
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
