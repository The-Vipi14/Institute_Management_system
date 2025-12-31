import "./RoleSelection.css";

const RoleSelection = () => {
  return (
    <div className="role-page">
      {/* Top Bar */}
      <header className="role-header">
        <div className="logo">
          <div className="logo-icon">🎓</div>
          <span>Institute MS</span>
        </div>
        <button className="signin-btn">
          Already have an account? <span>Sign In</span>
        </button>
      </header>

      {/* Back */}
      <div className="back-home">← Back to Home</div>

      {/* Title */}
      <div className="role-title">
        <h1>Choose Your Role</h1>
        <p>
          Select your role to get started with the appropriate dashboard and
          features.
        </p>
      </div>

      {/* Cards */}
      <div className="role-cards">
        {/* Student */}
        <div className="role-card student">
          <div className="icon">🎓</div>
          <h3>Student</h3>
          <p>
            Access your courses, submit assignments, take quizzes, and track
            your academic progress.
          </p>
          <ul>
            <li>View Attendance</li>
            <li>Take Quizzes</li>
            <li>Submit Assignments</li>
            <li>Track Performance</li>
          </ul>
          <button className="primary-btn">Register Now →</button>
        </div>

        {/* Trainer */}
        <div className="role-card trainer">
          <div className="icon">👥</div>
          <h3>Trainer</h3>
          <p>
            Manage your classes, create content, grade assignments, and monitor
            student progress.
          </p>
          <ul>
            <li>Manage Students</li>
            <li>Create Quizzes</li>
            <li>Grade Assignments</li>
            <li>View Reports</li>
          </ul>
          <button className="primary-btn">Register Now →</button>
        </div>

        {/* Admin */}
        <div className="role-card admin">
          <div className="icon">🛡️</div>
          <h3>Administrator</h3>
          <p>
            Full system control including user management, course creation, and
            analytics.
          </p>
          <ul>
            <li>Manage Courses</li>
            <li>User Management</li>
            <li>System Settings</li>
            <li>Analytics</li>
          </ul>
          <button className="outline-btn">Admin Login →</button>
        </div>
      </div>

      {/* Footer */}
      <div className="role-footer">
        Need help choosing? <span>Contact Support</span>
      </div>
    </div>
  );
};

export default RoleSelection;
