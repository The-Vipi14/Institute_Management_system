import "./student-dashboard.css";

const StudentDashboard = () => {
  return (
    <div className="sd-page">
      {/* HEADER */}
      <header className="sd-header">
        <h1>Student Dashboard</h1>
        <p>Welcome back, John 👋</p>
      </header>

      {/* STATS CARDS */}
      <div className="sd-stats">
        <div className="sd-card">
          <h3>Attendance</h3>
          <p className="sd-value">92%</p>
        </div>

        <div className="sd-card">
          <h3>Quizzes</h3>
          <p className="sd-value">78%</p>
        </div>

        <div className="sd-card">
          <h3>Assignments</h3>
          <p className="sd-value">6 / 8</p>
        </div>

        <div className="sd-card">
          <h3>Course</h3>
          <p className="sd-value">Full Stack Dev</p>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="sd-section">
        <h2>Recent Activity</h2>

        <div className="sd-list">
          <div className="sd-item">
            <span>📘 Quiz 3 submitted</span>
            <span className="muted">2 days ago</span>
          </div>

          <div className="sd-item">
            <span>📝 Assignment 2 graded</span>
            <span className="muted">4 days ago</span>
          </div>

          <div className="sd-item">
            <span>📅 Attendance marked</span>
            <span className="muted">Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
