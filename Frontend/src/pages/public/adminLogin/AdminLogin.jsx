import "./AdminLogin.css";

const Login = () => {
  return (
    <div className="login-page">
      {/* LEFT */}
      <div className="login-left">
        <div className="login-box">
          <div className="login-header">
            <div className="logo">🎓</div>
            <h1>Institute MS</h1>
            <p>Management System</p>
          </div>

          <h2>Welcome back</h2>
          <p className="subtitle">Sign in to access your dashboard</p>

          <form className="login-form">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <button type="button" className="btn-primary">
              Sign In
            </button>

            {/* functionality baad me */}
            {/* <button onClick={handleLogin}>Sign In</button> */}

            <p className="bottom-text">
              Don’t have an account? <span>Create one</span>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT */}
      <div className="login-right">
        <div className="right-content">
          <div className="icon-box">🎓</div>
          <h2>Institute Management System</h2>
          <p>
            Streamline your educational institution with our comprehensive
            management platform.
          </p>

          <div className="stats">
            <div>
              <h3>500+</h3>
              <span>Students</span>
            </div>
            <div>
              <h3>50+</h3>
              <span>Trainers</span>
            </div>
            <div>
              <h3>20+</h3>
              <span>Courses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
