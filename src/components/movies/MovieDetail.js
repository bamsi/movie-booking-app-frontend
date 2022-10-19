import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectMovie } from '../../redux/movie/movie-detail';
import './movieDetail.css';

function MovieDetail() {
  const movie = useSelector((state) => state.movie);
  console.log(movie);
  const movieId = useParams();
  const dispatch = useDispatch();
  // console.log(movieId.movieId);

  const fetchMovie = async () => {
    const response = await axios.get(`http://127.0.0.1:3000/api/v1/movies/${movieId.movieId}`).catch((err) => {
      console.log('Error', err);
    });
    dispatch(selectMovie(...response.data));
    // console.log(...response.data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">

              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1"><img src={movie.picture} alt={movie.title} /></div>
                <div className="tab-pane" id="pic-2"><img src={movie.picture} alt={movie.title} /></div>
                <div className="tab-pane" id="pic-3"><img src={movie.picture} alt={movie.title} /></div>
                <div className="tab-pane" id="pic-4"><img src={movie.picture} alt={movie.title} /></div>
                <div className="tab-pane" id="pic-5"><img src={movie.picture} alt={movie.title} /></div>
              </div>
              <ul className="preview-thumbnail nav nav-tabs">
                <li className="active"><a href="hi" data-target="#pic-1" data-toggle="tab"><img src={movie.picture} alt={movie.title} /></a></li>
                <li><a href="hi" data-target="#pic-2" data-toggle="tab"><img src={movie.picture} alt={movie.title} /></a></li>
                <li><a href="hi" data-target="#pic-3" data-toggle="tab"><img src={movie.picture} alt={movie.title} /></a></li>
                <li><a href="hi" data-target="#pic-4" data-toggle="tab"><img src={movie.picture} alt={movie.title} /></a></li>
                <li><a href="hi" data-target="#pic-5" data-toggle="tab"><img src={movie.picture} alt={movie.title} /></a></li>
              </ul>

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
                  {' '}
                  time:
                  {movie.time}
                </h4>
                <h4 className="review-no">
                  {' '}
                  Duration:
                  {movie.duration}
                </h4>

              </div>
              <p className="product-description">{movie.description}</p>
              <p className="vote">
                <strong>91%</strong>
                {' '}
                of buyers enjoyed this product!
                {' '}
                <strong>(87 votes)</strong>
              </p>
              <div className="action">
                <button className="add-to-cart btn btn-default" type="button">Back To Movies</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
