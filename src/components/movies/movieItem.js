import React from 'react';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieItem = ({
  id, title, description, picture,
}) => (
  <Link to={`/movie_detail/${id}`} className="text-decoration-none text-dark">
    <div className="card">
      <img src={picture} className="card-img-top" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <hr className="mt-2 mb-3" />
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer text-center">
        <Facebook />
        <Twitter />
        <Instagram />
      </div>
    </div>
  </Link>
);

export default MovieItem;

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
