import HomeButton from '../../layout/homeButton';

const Signup = () => (
  <div className="container-img">
    <div className="d-flex aligns-items-center justify-content-center h-100 d-inline-block">
      <div className="card align-self-center p-4" style={{ width: '28rem' }}>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-3">
            <label htmlFor="retypePassword" className="form-label">
              Retype Password
            </label>
            <input
              type="password"
              className="form-control"
              id="retypePassword"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
        <div className="align-self-end">
          <HomeButton />
        </div>
      </div>
    </div>
  </div>
);

export default Signup;
