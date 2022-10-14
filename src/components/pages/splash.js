import LoginButton from '../shared/login';
import SignupButton from '../shared/signup';

const Splash = () => (
  <div className="container-img">
    <div className="d-flex aligns-items-center justify-content-center h-100 d-inline-block">
      <div className="align-self-center">
        <h1 className="title">MOVIE BISKOP</h1>
        <div className="d-flex justify-content-center">
          <div className="mx-2">
            <LoginButton />
          </div>
          <div>
            <SignupButton />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Splash;
