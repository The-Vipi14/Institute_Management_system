// src/pages/student/Notifications.jsx
import "./studentNotifications.css";

const Notifications = () => {
  return (
    <div className="sn-page">
      {/* Header */}
      <div className="sn-header">
        <h1>Notifications</h1>
        <p>Stay updated with important announcements</p>
      </div>

      {/* Filters */}
      <div className="sn-filters">
        <button className="sn-filter active">All</button>
        <button className="sn-filter">Unread</button>
        <button className="sn-filter">Assignments</button>
        <button className="sn-filter">Quizzes</button>
      </div>

      {/* Notification list */}
      <div className="sn-list">
        <div className="sn-item unread">
          <div className="sn-icon assignment">📝</div>
          <div className="sn-content">
            <h4>New Assignment Posted</h4>
            <p>JavaScript Basics assignment has been posted.</p>
            <span className="sn-time">2 hours ago</span>
          </div>
        </div>

        <div className="sn-item">
          <div className="sn-icon quiz">📘</div>
          <div className="sn-content">
            <h4>Quiz Result Published</h4>
            <p>Your CSS Fundamentals quiz result is available.</p>
            <span className="sn-time">Yesterday</span>
          </div>
        </div>

        <div className="sn-item unread">
          <div className="sn-icon attendance">📅</div>
          <div className="sn-content">
            <h4>Attendance Marked</h4>
            <p>Your attendance for today has been marked present.</p>
            <span className="sn-time">Today</span>
          </div>
        </div>

        <div className="sn-item">
          <div className="sn-icon general">🔔</div>
          <div className="sn-content">
            <h4>System Update</h4>
            <p>New features have been added to your dashboard.</p>
            <span className="sn-time">3 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
