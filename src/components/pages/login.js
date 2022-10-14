import HomeButton from '../shared/homeButton';

const Login = () => (
  <div className="container-img">
    <div className="d-flex aligns-items-center justify-content-center h-100 d-inline-block">
      <div className="card align-self-center w-25 p-4">
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
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>
        <div className="align-self-end">
          <HomeButton />
        </div>
      </div>
    </div>
  </div>
);

export default Login;
