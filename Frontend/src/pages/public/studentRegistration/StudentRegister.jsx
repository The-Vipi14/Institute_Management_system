import "./studentRegister.css";

const StudentRegister = () => {
  return (
    <div className="sr-page">
      {/* LEFT : FORM */}
      <div className="sr-left">
        <a className="sr-back">← Back to Role Selection</a>

        <div className="sr-box">
          <div className="sr-badge">
            🎓 <span>Student Registration</span>
          </div>

          <h1>Student Registration</h1>
          <p className="sr-subtitle">
            Create your student account to access courses and track progress
          </p>

          <form className="sr-form">
            <label>Full Name *</label>
            <input type="text" placeholder="Enter your full name" />

            <label>Email Address *</label>
            <input type="email" placeholder="Enter your email" />

            <label>Phone Number</label>
            <input type="text" placeholder="Enter your phone number" />

            <label>Course Code *</label>
            <input type="text" placeholder="e.g. CS101, DS201" />
            <small>Available codes: CS101, DS201, UI301</small>

            <label>Password *</label>
            <input type="password" placeholder="Create a password" />

            <label>Confirm Password *</label>
            <input type="password" placeholder="Confirm your password" />

            <button type="button" className="sr-submit">
              Create Account
            </button>
          </form>

          <p className="sr-login">
            Already have an account? <span>Sign in</span>
          </p>
        </div>
      </div>

      {/* RIGHT : INFO PANEL */}
      <div className="sr-right">
        <div className="sr-right-content">
          <div className="sr-icon">🎓</div>
          <h2>Student Portal</h2>
          <p>
            Access courses, track attendance, attempt quizzes and monitor your
            academic performance — all in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentRegister;
