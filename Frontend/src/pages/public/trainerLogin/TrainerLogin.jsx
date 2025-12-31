import "./trainer-login.css";

const TrainerLogin = () => {
  return (
    <div className="tl-page">
      {/* LEFT */}
      <div className="tl-left">
        <div className="tl-box">
          <div className="tl-header">
            <div className="tl-logo">👤</div>
            <h1>Trainer Login</h1>
            <p>Access your trainer dashboard</p>
          </div>

          <form className="tl-form">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <button type="button" className="tl-btn">
              Sign In
            </button>

            {/* functionality baad me */}
            {/* <button onClick={handleTrainerLogin}>Sign In</button> */}

            <p className="tl-bottom">
              Don’t have an account? <span>Create one</span>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT */}
      <div className="tl-right">
        <div className="tl-right-content">
          <div className="tl-icon">👥</div>
          <h2>Trainer Portal</h2>
          <p>
            Manage students, create quizzes, evaluate assignments, and monitor
            class performance.
          </p>

          <div className="tl-stats">
            <div>
              <h3>120+</h3>
              <span>Students</span>
            </div>
            <div>
              <h3>15+</h3>
              <span>Batches</span>
            </div>
            <div>
              <h3>30+</h3>
              <span>Quizzes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerLogin;
