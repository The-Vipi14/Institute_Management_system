import "./MyProfile.css";

const TrainerProfile = () => {
  return (
    <div className="profile-page">
      {/* Header */}
      <div className="profile-header">
        <div>
          <h1>My Profile</h1>
          <p>View and manage your profile information</p>
        </div>
        <button className="edit-btn">✏ Edit Profile</button>
      </div>

      <div className="profile-grid">
        {/* Left Card */}
        <div className="profile-card">
          <div className="profile-cover"></div>

          <div className="profile-avatar">t</div>

          <h2>the_vipin</h2>
          <span className="role">Trainer</span>

          <div className="profile-info">
            <p>✉ om.22916914@gmail.com</p>
            <p>📞 6523698564</p>
            <p>📅 Joined December 2025</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="profile-right">
          {/* Course Info */}
          <div className="info-card">
            <h3>📘 Course Information</h3>
            <div className="info-grid">
              <div>
                <span>Course Name</span>
                <strong>Web Development Fundamentals</strong>
              </div>
              <div>
                <span>Course Code</span>
                <strong>CS101</strong>
              </div>
              <div>
                <span>Trainer</span>
                <strong>Dr. Sarah Johnson</strong>
              </div>
              <div>
                <span>Duration</span>
                <strong>12 weeks</strong>
              </div>
            </div>
          </div>

          {/* Academic Performance */}
          <div className="info-card">
            <h3>🏅 Academic Performance</h3>
            <div className="stats-grid">
              <div className="stat-box">
                <strong>0%</strong>
                <span>Attendance</span>
              </div>
              <div className="stat-box">
                <strong>0%</strong>
                <span>Quiz Avg</span>
              </div>
              <div className="stat-box">
                <strong>0/2</strong>
                <span>Quizzes</span>
              </div>
              <div className="stat-box">
                <strong>0/2</strong>
                <span>Assignments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerProfile;
