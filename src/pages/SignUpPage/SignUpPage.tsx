import './SignUpPage.scss';

export const SignUpPage = () => {
  return (
    <div className="signup">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
        <div className="login">
          <span>Already have an account?</span>
          <a href="!">Log In</a>
        </div>
      </div>
    </div>
  );
};
