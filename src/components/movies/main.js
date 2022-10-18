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
    <>
      <h1>Latest Movies</h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col" key={movie.id}>
            <MovieItem
              id={movie.id}
              title={movie.title}
              description={movie.description}
              picture={movie.picture}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
