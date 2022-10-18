/* eslint-disable camelcase */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBookingAction, fetchData } from '../../redux/booking-redux/booking';
//import './css/appointment.css';

const Bookings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const data = useSelector((state) => state.booking);

  const deleteBooking = (e, id) => {
    dispatch(deleteBookingAction(id));
    e.target.parentNode.remove();
  };

  return (
    <div className="booking-container">

      <div className="px-5 pb-2 text-center booking-heading mt-5">
        <h2>AVAILABLE BOOKINGS</h2>
      </div>

      {
        data.length === 0
          ? (
            <h2 className="not-found-notice mt-5 text-center">No bookings availavle</h2>
          )
          : (
            <div className="booking-box py-3">
              {
                data.map((el) => (
                  <div className="my-booking-card card m-2" key={el.bookingId}>
                    <div className="d-flex card-box flex-column flex-lg-row justify-content-evenly">
                      <ul className="columns-booking">
                        <li className="h5 lbl-book">
                          MOVIE TITLE:
                        </li>
                        <li className="h5">
                          {` ${el.movieName}`}
                        </li>
                      </ul>

                      <ul className="columns-booking middle-list">
                        <li className="h5 lbl-book">RESERVATION DATE</li>
                        <li className="h5">{el.date}</li>
                      </ul>

                      <ul className="columns-booking">
                        <li className="h5 lbl-appoint">CITY</li>
                        <li className="h5">{el.cityName}</li>
                      </ul>

                    </div>
                    <button type="submit" onClick={(e) => deleteBooking(e, el.appointmentId)} className="delete-booking">CANCEL</button>
                  </div>

                ))
              }

            </div>
          )
      }

    </div>
  );
};

export default Bookings;
