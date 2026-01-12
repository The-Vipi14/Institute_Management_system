import "./TrainerSubmissions.css";
import { assignmentsData } from "../../../data/assignmentsData";

const TrainerSubmissions = () => {
  return (
    <div className="tsu-page">
      <div className="tsu-header">
        <h1>Student Submissions</h1>
        <p>View submissions received for each assignment</p>
      </div>

      {assignmentsData.length === 0 && (
        <p className="muted">No assignments available.</p>
      )}

      <div className="tsu-list">
        {assignmentsData.map((a) => (
          <div key={a.id} className="tsu-card">
            {/* Assignment Info */}
            <div className="tsu-assignment">
              <h3>{a.title}</h3>
              <p>{a.description}</p>
              <small>Due: {a.dueDate || "Not set"}</small>
            </div>

            {/* Submissions */}
            <div className="tsu-submissions">
              <h4>Submissions</h4>

              {a.submissions.length === 0 ? (
                <p className="muted">No submissions yet.</p>
              ) : (
                a.submissions.map((s, index) => (
                  <div key={index} className="submission-row">
                    <div>
                      <strong>Student:</strong> {s.studentId}
                    </div>
                    <div className="file">
                      📄 {s.studentFile}
                    </div>
                    <div className="date">
                      {s.submittedAt}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerSubmissions;
