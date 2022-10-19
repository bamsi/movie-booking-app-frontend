import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookings } from '../../redux/booking/bookings';
import { getCurrentUser } from '../../redux/authentication/authentication';

function MovieBookings() {
  const bookings = useSelector((state) => state.bookings.list);

  const user = getCurrentUser();
  const userId = user.user.id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookings(userId));
  }, []);

  return (
    <div className="my-booking-container">

      <div className="px-5 pb-2 text-center booking-heading mt-5">
        <h2>My bookings</h2>
      </div>

      {bookings.length === 0
        ? (
          <h2 className="not-found-notice mt-5 text-center">No booked movies</h2>
        )
        : (
          <div className="booking-box py-3">
            {bookings.map((booking) => (
              <div className="my-booking-card container" key={booking.bookingId}>
                <div className="d-flex ustify-content-evenly">
                  <div className="booking-container">
                    <h4 className="movie-title">{booking.movieTitle}</h4>
                    <img src={booking.moviePicture} className="card-img-top" alt={booking.title} />
                    <p className="booked-date">{booking.bookedDate}</p>
                    <p className="city-name">{booking.cityName}</p>
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
