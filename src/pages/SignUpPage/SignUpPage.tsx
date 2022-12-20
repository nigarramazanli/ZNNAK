import './SignUpPage.scss';
import { useDispatch } from 'react-redux';
import { register } from './signupPageSlice';

export const SignUpPage = () => {
  const dispatch = useDispatch();
  const registerClickHandler = () => dispatch(register({
    name: 'Nigar', lastName: 'Akbarli',
    email: 'mail@mail.com',
    password: '12345'
  }));
  return (
    <div className="signup">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button type='button' onClick={registerClickHandler}>Sign Up</button>
        </form>
        <div className="login">
          <span>Already have an account?</span>
          <a href="!">Log In</a>
        </div>
      </div>
    </div>
  );
};
