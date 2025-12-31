// src/pages/student/Profile.jsx
import "./studentProfile.css";

const Profile = () => {
  return (
    <div className="sp-page">
      {/* Header */}
      <div className="sp-header">
        <h1>My Profile</h1>
        <p>View and manage your personal information</p>
      </div>

      {/* Top Card */}
      <div className="sp-top">
        <div className="sp-avatar">V</div>
        <div className="sp-basic">
          <h2>Vipin Bhardwal</h2>
          <p>Student • Full Stack Development</p>
        </div>

        <button className="sp-edit">Edit Profile</button>
      </div>

      {/* Details */}
      <div className="sp-grid">
        {/* Personal Info */}
        <div className="sp-card">
          <h3>Personal Information</h3>

          <div className="sp-row">
            <span>Email</span>
            <b>vipin@gmail.com</b>
          </div>

          <div className="sp-row">
            <span>Mobile</span>
            <b>+91 98765 43210</b>
          </div>

          <div className="sp-row">
            <span>Gender</span>
            <b>Male</b>
          </div>

          <div className="sp-row">
            <span>Date of Birth</span>
            <b>12 Aug 2002</b>
          </div>
        </div>

        {/* Academic Info */}
        <div className="sp-card">
          <h3>Academic Information</h3>

          <div className="sp-row">
            <span>Course</span>
            <b>Full Stack Development</b>
          </div>

          <div className="sp-row">
            <span>Course Code</span>
            <b>FS101</b>
          </div>

          <div className="sp-row">
            <span>Batch</span>
            <b>Batch A</b>
          </div>

          <div className="sp-row">
            <span>Status</span>
            <b className="status active">Active</b>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="sp-card">
        <h3>Security</h3>

        <div className="sp-actions">
          <button className="sp-btn outline">Change Password</button>
          <button className="sp-btn danger">Deactivate Account</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
