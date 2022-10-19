import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiTriangleTarget } from 'react-icons/gi';
import logo from '../asserts/logo.png';
import SocialMedia from '../asserts/social_media.png';

const Navbar = () => {
  const [classValue, setClassValue] = useState('hide');
  const toggleMenu = () => {
    if (classValue === 'show') {
      setClassValue('hide');
    } else {
      setClassValue('show');
    }
  };

  if (classValue === 'hide') {
    return (
      <div className="bars" onClick={() => toggleMenu()} role="presentation">
        <i className="fa fa-bars bars3" />
      </div>
    );
  }
  return (
    <div className="d-none d-md-flex">
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
                  to="/"
                >
                  Latest Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? 'active link' : 'link')}
                  to="/genres"
                >
                  Genres
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? 'active link' : 'link')}
                  to="/trending_movies"
                >
                  Trending Movies
                </NavLink>
              </li>
              {/* {
              name === 'admin'
                ? (
                  <div>
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
                  </div>
                )
                : null
            } */}

              {/* <li className="nav-logout">
              <i className="fa-solid fa-right-from-bracket" />
              <a href="/" className="nav-link text-white" onClick={logOut}>
                LogOut
              </a>
            </li> */}
            </ul>
          </div>
          <img src={SocialMedia} className="social_media" alt="social_media" />
        </nav>
      </div>
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

// Navbar.propTypes = {
//   classValue: PropTypes.string.isRequired,
//   toggleMenu: PropTypes.func.isRequired,
// };
