import "./studentProfile.css";

const Profile = () => {
  return (
    <div className="profile-page">
      {/* Header */}
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>View and manage your personal information</p>
      </div>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-top">
          <div className="profile-avatar">V</div>

          <div className="profile-basic">
            <h2>Vipin Bhardwal</h2>
            <span>Student • Full Stack Development</span>
          </div>

          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>

      {/* Info Sections */}
      <div className="profile-grid">
        {/* Personal Info */}
        <div className="info-card">
          <h3>Personal Information</h3>

          <div className="info-row">
            <span>Email</span>
            <strong>vipin@gmail.com</strong>
          </div>

          <div className="info-row">
            <span>Mobile</span>
            <strong>+91 98765 43210</strong>
          </div>

          <div className="info-row">
            <span>Date of Birth</span>
            <strong>12 Aug 2002</strong>
          </div>

          <div className="info-row">
            <span>Gender</span>
            <strong>Male</strong>
          </div>
        </div>

        {/* Academic Info */}
        <div className="info-card">
          <h3>Academic Information</h3>

          <div className="info-row">
            <span>Course</span>
            <strong>Full Stack Development</strong>
          </div>

          <div className="info-row">
            <span>Course Code</span>
            <strong>FS101</strong>
          </div>

          <div className="info-row">
            <span>Batch</span>
            <strong>Batch A</strong>
          </div>

          <div className="info-row">
            <span>Status</span>
            <strong className="status-active">Active</strong>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="security-card">
        <h3>Security</h3>

        <div className="security-actions">
          <button className="outline-btn">Change Password</button>
          <button className="danger-btn">Deactivate Account</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
