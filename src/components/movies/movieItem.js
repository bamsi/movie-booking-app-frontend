import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieItem = ({
  id, title, description, picture,
}) => (
  <Link to="/users/" params={{ id }}>
    <div className="card">
      <img src={picture} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
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
