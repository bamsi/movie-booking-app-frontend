import { Routes, Route } from 'react-router-dom';
import Splash from './components/pages/splash';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import Navbar from './layout/Navbar';
import Main from './components/movies/main';
import AddMovie from './components/movies/addMovie';
import MovieBookings from './components/bookings/MovieBookings';
import NewBooking from './components/bookings/NewBooking';

function App() {
  return (
    <div className="main-container">
      <div>
        <Navbar />
      </div>
      <div className="container-fluid px-0 main-section">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Main />} />
          <Route path="/add_movie" element={<AddMovie />} />
          <Route path="/bookings" element={<MovieBookings />} />
          <Route path="/new_booking" element={<NewBooking />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
