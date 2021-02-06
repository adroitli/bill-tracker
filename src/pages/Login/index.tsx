import './style.scss';
import Facebook from '../../assets/images/icons/facebook.svg';
import Google from '../../assets/images/icons/google.svg';

interface Props {

}

const Login:React.FC<Props> = props => {

  return (
    <div className="container">
      <div className="inner">
          <a href='#'>
              <img src={Facebook} alt='facebook login' /> <span>Facebook Login</span>
          </a>
          <a href='#'>
              <img src={Google} alt='google login' /> <span>Google Login</span>
          </a>

          <form>
              <div className="form-group">
                  <input type="email" placeholder="Email"/>
              </div>
              <div className="form-group">
                  <input type="password" placeholder="Password"/>
              </div>
              <div className="form-group">
                  <a className="btn-login">Log in</a>
              </div>
              <div className="form-group">
                  <a href="#" className="forgot-password">Forgot password?</a>
              </div>
          </form>
      </div>            
    </div>
  );
};

export default Login;