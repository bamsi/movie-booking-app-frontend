import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectMovie } from '../../redux/movie/movie-detail';

function MovieDetail() {
  const movie = useSelector((state) => state.movie);
  console.log(movie.payload);
  const movieId = useParams();
  const dispatch = useDispatch();
  console.log(movieId.movieId);

  const fetchMovie = async () => {
    const response = await axios.get(`http://127.0.0.1:3000/api/v1/movies/${movieId.movieId}`).catch((err) => {
      console.log('Error', err);
    });
    dispatch(selectMovie(response.data));
    console.log(response.data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>MovieDetail</div>
  );
}

export default MovieDetail;
