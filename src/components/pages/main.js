import { useSelector } from 'react-redux';

const Main = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <>
      <h1>Latest Movies</h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col" key={movie.id}>
            Movie item:
            {movie.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
