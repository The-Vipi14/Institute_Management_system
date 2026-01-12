import "./TrainerAssignments.css";
import { assignmentsData } from "../../../data/assignmentsData";
import { Link } from "react-router-dom";

const TrainerAssignments = () => {
  return (
    <div className="ta-page">
      {/* Header */}
      <div className="ta-header">
        <h1>Assignments</h1>
        <p>Manage assignments and take next actions</p>
      </div>

      {/* Assignments List */}
      <div className="ta-list">
        {assignmentsData.length === 0 && (
          <p className="muted">No assignments created yet.</p>
        )}

        {assignmentsData.map((a) => (
          <div key={a.id} className="ta-card">
            {/* Left info */}
            <div className="ta-info">
              <h3>{a.title}</h3>
              <p>{a.description}</p>

              <div className="ta-meta">
                <span>
                  Due: <b>{a.dueDate || "Not set"}</b>
                </span>
                <span className="badge">
                  Submissions: {a.submissions.length}
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="ta-actions">
              <Link to="/trainer/submissions" className="btn secondary">
                View Submissions
              </Link>

              <Link to="/trainer/grading" className="btn primary">
                Grade Assignment
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerAssignments;
