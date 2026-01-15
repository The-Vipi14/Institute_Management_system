import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="admin-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>System overview and management</p>
        </div>
        <button className="settings-btn">⚙ System Settings</button>
      </div>

      {/* Stats */}
      <div className="admin-stats">
        <div className="stat-card blue">
          <span>Total Students</span>
          <strong>6</strong>
          <small>Registered students</small>
        </div>
        <div className="stat-card green">
          <span>Total Trainers</span>
          <strong>3</strong>
          <small>Active trainers</small>
        </div>
        <div className="stat-card purple">
          <span>Active Courses</span>
          <strong>2</strong>
          <small>of 3 total courses</small>
        </div>
        <div className="stat-card">
          <span>Avg Attendance</span>
          <strong>54%</strong>
          <small>Across all courses</small>
        </div>
      </div>

      {/* Main Grid */}
      <div className="admin-grid">
        <div className="admin-card">
          <h3>Quick Actions</h3>
          <ul className="quick-actions">
            <li>📘 Manage Courses</li>
            <li>🎓 Manage Trainers</li>
            <li>👥 Manage Students</li>
            <li>📊 View Reports</li>
          </ul>
        </div>

        <div className="admin-card">
          <h3>Students per Course</h3>
          <div className="fake-bar-chart" />
        </div>

        <div className="admin-card">
          <h3>Course Status</h3>
          <div className="donut-chart" />
        </div>

        <div className="admin-card">
          <h3>Weekly Registrations</h3>
          <div className="fake-line-chart" />
        </div>

        <div className="admin-card">
          <h3>Quiz Completion Rate by Course</h3>
          <div className="horizontal-bars">
            <div style={{ width: "50%" }}>CS101</div>
            <div style={{ width: "80%" }}>DS201</div>
            <div style={{ width: "30%" }}>UI301</div>
          </div>
        </div>
      </div>

      {/* Courses Table */}
      <div className="admin-card">
        <div className="table-header">
          <h3>All Courses</h3>
          <a href="#">Manage all</a>
        </div>

        <div className="courses-table">
          {[
            ["Web Development Fundamentals", "CS101", "Dr. Sarah Johnson", 5, "Active"],
            ["Data Science with Python", "DS201", "Prof. Michael Chen", 1, "Active"],
            ["UI/UX Design Mastery", "UI301", "Dr. Sarah Johnson", 0, "Upcoming"],
          ].map((c, i) => (
            <div className="course-row" key={i}>
              <span>{c[0]}</span>
              <span>{c[1]}</span>
              <span>{c[2]}</span>
              <span>{c[3]}</span>
              <span className={`status ${c[4].toLowerCase()}`}>{c[4]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
