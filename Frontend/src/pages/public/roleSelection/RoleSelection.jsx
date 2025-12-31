import "./roleSelection.css";

const RoleSelection = () => {
  return (
    <div className="rs-page">
      {/* HEADER */}
      <header className="rs-header">
        <div className="rs-logo">
          🎓 <span>Institute MS</span>
        </div>

        <p className="rs-login">
          Already have an account? <span>Sign In</span>
        </p>
      </header>

      {/* CONTENT */}
      <div className="rs-content">
        <h1>Choose Your Role</h1>
        <p className="rs-subtitle">
          Select your role to access the appropriate dashboard and features.
        </p>

        <div className="rs-cards">
          {/* STUDENT */}
          <div className="rs-card student">
            <div className="rs-icon">🎓</div>
            <h3>Student</h3>
            <p>
              Access courses, submit assignments, attempt quizzes, and track
              your academic performance.
            </p>

            <ul>
              <li>View Attendance</li>
              <li>Take Quizzes</li>
              <li>Submit Assignments</li>
              <li>Track Performance</li>
            </ul>

            <button className="rs-btn">Register as Student</button>
          </div>

          {/* TRAINER */}
          <div className="rs-card trainer">
            <div className="rs-icon">👥</div>
            <h3>Trainer</h3>
            <p>
              Manage students, create quizzes, evaluate assignments, and view
              detailed reports.
            </p>

            <ul>
              <li>Manage Students</li>
              <li>Create Quizzes</li>
              <li>Grade Assignments</li>
              <li>View Reports</li>
            </ul>

            <button className="rs-btn">Register as Trainer</button>
          </div>

          {/* ADMIN */}
          <div className="rs-card admin">
            <div className="rs-icon">🛡️</div>
            <h3>Administrator</h3>
            <p>
              Full system access including course management, user control,
              analytics, and settings.
            </p>

            <ul>
              <li>Manage Courses</li>
              <li>User Management</li>
              <li>System Settings</li>
              <li>Analytics</li>
            </ul>

            <button className="rs-btn outline">Admin Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
