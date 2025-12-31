import "./student-login.css";

const StudentLogin = () => {
  return (
    <div className="sl-page">
      {/* LEFT */}
      <div className="sl-left">
        <div className="sl-box">
          <div className="sl-header">
            <div className="sl-logo">🎓</div>
            <h1>Student Login</h1>
            <p>Access your student dashboard</p>
          </div>

          <form className="sl-form">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <button type="button" className="sl-btn">
              Sign In
            </button>

            {/* functionality baad me */}
            {/* <button onClick={handleStudentLogin}>Sign In</button> */}

            <p className="sl-bottom">
              Don’t have an account? <span>Create one</span>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT */}
      <div className="sl-right">
        <div className="sl-right-content">
          <div className="sl-icon">📘</div>
          <h2>Student Portal</h2>
          <p>
            View courses, track attendance, attempt quizzes, submit assignments,
            and monitor your performance.
          </p>

          <div className="sl-stats">
            <div>
              <h3>8+</h3>
              <span>Courses</span>
            </div>
            <div>
              <h3>120+</h3>
              <span>Lectures</span>
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

export default StudentLogin;
