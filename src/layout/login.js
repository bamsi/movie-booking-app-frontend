import { Link } from 'react-router-dom';

const LoginButton = () => (
  <Link to="/login" className="btn btn-success rounded-pill px-5">
    LOG IN
  </Link>
);

export default LoginButton;
