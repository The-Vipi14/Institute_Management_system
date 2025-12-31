import "./AdminLogin.css";

const AdminLogin = () => {
  return (
    <div className="admin-login">
      {/* LEFT */}
      <div className="login-left">
        <div className="brand">
          <div className="logo">🎓</div>
          <div>
            <h3>Institute MS</h3>
            <p>Management System</p>
          </div>
        </div>

        <h1>Welcome back</h1>
        <p className="subtitle">Sign in to access your dashboard</p>

        <form className="login-form">
          <label>Email Address</label>
          <div className="input-box">
            <span>📧</span>
            <input type="email" placeholder="Enter your email" />
          </div>

          <label>Password</label>
          <div className="input-box">
            <span>🔒</span>
            <input type="password" placeholder="Enter your password" />
            <span className="eye">👁️</span>
          </div>

          <button className="login-btn">Sign In</button>
        </form>

        <div className="demo">
          <p>DEMO ACCOUNTS</p>

          <div className="demo-card">
            <strong>Admin</strong>
            <span>admin@institute.com</span>
          </div>
          <div className="demo-card">
            <strong>Trainer</strong>
            <span>sarah@institute.com</span>
          </div>
          <div className="demo-card">
            <strong>Student</strong>
            <span>john@student.com</span>
          </div>
        </div>

        <p className="signup">
          Don't have an account? <span>Create one</span>
        </p>
      </div>

      {/* RIGHT */}
      <div className="login-right">
        <div className="right-content">
          <div className="big-icon">🎓</div>
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

export default AdminLogin;
