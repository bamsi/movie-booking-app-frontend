import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/movie/movies';
import MovieItem from './movieItem';

const Main = () => {
  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!movies.length) dispatch(fetchMovies(1));
  }, []);
  return (
    <div className="container pt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Latest Movies</h1>
        <p>Most watched latest movies on Movie Bisko.</p>
      </div>

      <div className="row">
        {movies.map((movie) => (
          <div className="col-12 col-md-4" key={movie.id}>
            <MovieItem
              id={movie.id}
              title={movie.title}
              description={movie.description}
              picture={movie.picture}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
