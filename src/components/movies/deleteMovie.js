import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GiTriangleTarget } from 'react-icons/gi';
import { fetchMovies, deleteMovie } from '../../redux/movie/movies';
import MovieItem from './movieItem';

const DeleteMovie = () => {
  const movies = useSelector((state) => state.movies.list);
  const next = useSelector((state) => state.movies.next_page);
  const prev = useSelector((state) => state.movies.prev_page);
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  useEffect(() => {
    if (!movies.length) dispatch(fetchMovies(1));
  }, []);
  const prevPage = () => {
    if (prev != null) {
      dispatch(fetchMovies(prev));
    }
  };
  const nextPage = () => {
    if (next != null) {
      dispatch(fetchMovies(next));
    }
  };

  const removeMovie = (movieId) => {
    if (movieId) {
      const response = deleteMovie(movieId);
      response.then((data) => {
        if (data.status !== 200) {
          setError('Failed to delete a movie');
        } else {
          dispatch(fetchMovies(1));
        }
      });
    }
  };

  return (
    <div className="container pt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Delete Movie</h1>
        <p>Movies from Bisko.</p>
      </div>

      <div className="d-flex justify-content-center">
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
      </div>

      <div className="row">
        <div className="col-1 d-flex align-items-center d-none d-md-flex">
          <div className={`arrow-container ${prev > 0 ? 'active' : ''}`}>
            <GiTriangleTarget
              className="prev-button"
              onClick={() => prevPage()}
            />
          </div>
        </div>
        <div className="col col-md-10">
          <div className="row">
            {movies.map((movie) => (
              <div className="col-12 col-md-4" key={movie.id}>
                <MovieItem
                  id={movie.id}
                  title={movie.title}
                  description={movie.description}
                  picture={movie.picture}
                />
                <div className="d-flex justify-content-center mt-3">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeMovie(movie.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-1 d-flex align-items-center d-none d-md-flex">
          <div className={`arrow-container ${next != null ? 'active' : ''}`}>
            <GiTriangleTarget
              className="next-button"
              onClick={() => nextPage()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovie;
