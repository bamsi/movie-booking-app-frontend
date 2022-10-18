import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GiTriangleTarget } from 'react-icons/gi';
import { fetchMovies } from '../../redux/movie/movies';
import MovieItem from './movieItem';

const Main = () => {
  const movies = useSelector((state) => state.movies.list);
  const next = useSelector((state) => state.movies.next_page);
  const prev = useSelector((state) => state.movies.prev_page);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!movies.length) dispatch(fetchMovies(1));
  }, []);
  const prevPage = () => {};
  const nextPage = () => {};

  return (
    <div className="container pt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Latest Movies</h1>
        <p>Most watched latest movies on Movie Bisko.</p>
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

export default Main;
