import { Routes, Route } from 'react-router-dom';
import Splash from './components/pages/splash';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import Navbar from './layout/Navbar';
import Main from './components/movies/main';
import AddMovie from './components/movies/addMovie';
import MovieDetail from './components/movies/MovieDetail';

function App() {
  return (
    <div className="main-container">
      <div>
        <Navbar />
      </div>
      <div className="container-fluid px-0">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Main />} />
          <Route path="/add_movie" element={<AddMovie />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
