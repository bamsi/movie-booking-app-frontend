import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookings, deleteBooking } from '../../redux/booking/bookings';
import { getCurrentUser } from '../../redux/authentication/authentication';

function MovieBookings() {
  const bookings = useSelector((state) => state.bookings.list);

  const user = getCurrentUser();
  const userId = user.user.id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookings(userId));
  }, []);

  const deleteBookedMovie = (e, id) => {
    dispatch(deleteBooking(id, userId));
    e.target.parentNode.remove();
  };

  return (
    <div className="booking-container container">

      <div className="px-5 pb-2 text-center booking-heading mt-5">
        <h2 className="my-bookings">My Bookings</h2>
      </div>

      {bookings.length === 0
        ? (
          <h2 className="not-found-notice mt-5 text-center">No booked movies</h2>
        )
        : (
          <div className="booking-box row container">
            {bookings.map((booking) => (
              <div className="col-lg-4 col-md-4" key={booking.bookingId}>
                <div className="col-lg-12 col-md-12">
                  <div className="card mt-4">
                    <div className="card-body">
                      <img src={booking.moviePicture} className="booking-img" alt={booking.title} />
                      <h6 className="movie-title">{booking.movieTitle}</h6>
                      <p className="booked-date">{booking.bookedDate}</p>
                      <p className="city-name">{booking.cityName}</p>
                    </div>
                    <button type="submit" onClick={(e) => deleteBookedMovie(e, booking.bookingId)} className="delete-booking">Cancel</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}

export default MovieBookings;
