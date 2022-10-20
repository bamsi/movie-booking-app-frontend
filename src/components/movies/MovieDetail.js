import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getMovieDetails } from '../../redux/movie/movie-detail';
import './movieDetail.css';

function MovieDetail() {
  const movie = useSelector((state) => state.movie);
  const movieId = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetails(movieId.movieId));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <img
                  src={movie.picture}
                  alt={movie.title}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{movie.title}</h3>
              <div className="rating">
                <div className="stars">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <h4 className="review-no">
                  Time:
                  {movie.time}
                </h4>
                <h4 className="review-no">
                  Duration:
                  {movie.duration}
                </h4>
              </div>
              <p className="product-description">{movie.description}</p>
              <p className="vote">
                <strong>91%</strong>
                of buyers enjoyed this Movie!
                <strong>(87 votes)</strong>
              </p>
              <div className="action">
                <Link to="/reserve_page">
                  <button className="add-to-cart btn btn-default" type="button">
                    Reserve
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
