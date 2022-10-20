import React, { useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiTriangleTarget } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import logo from '../asserts/logo.png';
import SocialMedia from '../asserts/social_media.png';
import { loggedIn, logout } from '../redux/authentication/authentication';

const Navbar = () => {
  const [classValue, setClassValue] = useState('hide');
  const dispatch = useDispatch();
  const toggleMenu = () => {
    if (classValue === 'show') {
      setClassValue('hide');
    } else {
      setClassValue('show');
    }
  };

  const logOut = useCallback(() => {
    dispatch(logout());
    window.location.reload();
  }, [dispatch]);

  if (classValue === 'hide') {
    return (
      <div className="bars" onClick={() => toggleMenu()} role="presentation">

        <i className="fa fa-bars bars3" />

      </div>
    );
  }
  return (
    <div className="sidebar-container">
      <nav className={`navbar ${classValue}`}>
        <div className="logo-container">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>
        <div className="links-container">
          <ul>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? 'active link' : 'link')}
                to="/home"
              >
                Latest Movies
              </NavLink>
            </li>
            {
              loggedIn() === true
                ? (
                  <div>
                    <li>
                      <NavLink
                        className={(navData) => (navData.isActive ? 'active link' : 'link')}
                        to="/new_booking"
                      >
                        New Booking
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={(navData) => (navData.isActive ? 'active link' : 'link')}
                        to="/bookings"
                      >
                        Bookings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={(navData) => (navData.isActive ? 'active link' : 'link')}
                        to="/add_movie"
                      >
                        Add A Movie
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={(navData) => (navData.isActive ? 'active link' : 'link')}
                        to="/delete_movie"
                      >
                        Delete A Movie
                      </NavLink>
                    </li>
                    <li className="nav-logout">
                      <a href="/" className="nav-link" onClick={logOut}>
                        LogOut
                      </a>
                    </li>
                  </div>
                ) : null
            }
            {
              loggedIn() === false
                ? (
                  <>
                    <li>
                      <NavLink
                        className={(navData) => (navData.isActive ? 'active link' : 'link')}
                        to="/login"
                      >
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={(navData) => (navData.isActive ? 'active link' : 'link')}
                        to="/signup"
                      >
                        Signup
                      </NavLink>
                    </li>
                  </>
                ) : null
            }
          </ul>
        </div>
        <img src={SocialMedia} className="social_media" alt="social_media" />
      </nav>
      <div className="close-btn-container">
        <GiTriangleTarget
          className="close-arrow"
          onClick={() => toggleMenu()}
        />
      </div>
    </div>
  );
};

export default Navbar;
