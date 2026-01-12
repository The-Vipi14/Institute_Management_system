import "./UploadAssignmentModal.css";

const UploadAssignmentModal = ({ onClose }) => {
  return (
    <div className="ta-modal-overlay" onClick={onClose}>
      <div
        className="ta-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Upload Assignment</h2>
        <p className="muted">
          Share assignment details with students
        </p>

        <div className="ta-form">
          <label>Assignment Title</label>
          <input
            type="text"
            placeholder="e.g. React Hooks Assignment"
          />

          <label>Description</label>
          <textarea
            rows="3"
            placeholder="Explain what students need to do"
          />

          <label>Due Date</label>
          <input type="date" />

          <label>Upload PDF</label>
          <input type="file" accept=".pdf" />
        </div>

        <div className="ta-modal-actions">
          <button className="outline" onClick={onClose}>
            Cancel
          </button>
          <button className="primary">
            Upload Assignment
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadAssignmentModal;
