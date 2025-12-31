import "./trainerRegister.css";

const TrainerRegister = () => {
  return (
    <div className="auth-page">
      {/* LEFT FORM */}
      <div className="auth-form">
        <a className="back-link">← Back to Role Selection</a>

        <div className="auth-badge green">
          🎓 Trainer Registration
        </div>

        <h1>Trainer Registration</h1>
        <p className="subtitle">
          Join as a trainer to manage courses and guide students
        </p>

        <form className="form">
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

          <button type="button" className="primary-btn">
            Create Account
          </button>
        </form>

        <p className="bottom-text">
          Already have an account? <span>Sign in</span>
        </p>
      </div>

      {/* RIGHT PANEL */}
      <div className="auth-side green-bg">
        <div className="side-content">
          <div className="icon-box">👤</div>
          <h2>Trainer Portal</h2>
          <p>
            Manage your students, create assessments, grade assignments,
            and analyze performance data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainerRegister;
