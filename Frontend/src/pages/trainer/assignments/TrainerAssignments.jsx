import { useState } from "react";
import "./TrainerAssignments.css";
import UploadAssignmentModal from "./UploadAssignmentModal";

const TrainerAssignments = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="ta-page">
      {/* Header */}
      <div className="ta-header">
        <div>
          <h1>Assignments</h1>
          <p>Upload and manage assignments for students</p>
        </div>

        <button
          className="ta-upload-btn"
          onClick={() => setShowModal(true)}
        >
          + Upload Assignment
        </button>
      </div>

      {/* Assignment List */}
      <div className="ta-list">
        {/* Assignment Card */}
        <div className="ta-card">
          <div className="ta-card-left">
            <h3>React Hooks Assignment</h3>
            <p>Practice useState, useEffect, and useContext.</p>

            <div className="ta-meta">
              <span>📅 Due: 2024-10-05</span>
              <span>📄 react-hooks.pdf</span>
            </div>
          </div>

          <div className="ta-card-right">
            <span className="ta-badge active">Active</span>

            <div className="ta-actions">
              <button className="outline">View</button>
              <button className="primary">Submissions</button>
            </div>
          </div>
        </div>

        {/* Assignment Card */}
        <div className="ta-card">
          <div className="ta-card-left">
            <h3>JavaScript Fundamentals</h3>
            <p>Explain closures, hoisting and promises.</p>

            <div className="ta-meta">
              <span>📅 Due: 2024-10-10</span>
              <span>📄 js-fundamentals.pdf</span>
            </div>
          </div>

          <div className="ta-card-right">
            <span className="ta-badge draft">Draft</span>

            <div className="ta-actions">
              <button className="outline">Edit</button>
              <button className="danger">Delete</button>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showModal && (
        <UploadAssignmentModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default TrainerAssignments;
