import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/movie/movies';

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
            Movie item:
            {movie.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
