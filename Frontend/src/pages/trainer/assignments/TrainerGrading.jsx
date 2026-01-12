import "./TrainerGrading.css";
import { assignmentsData } from "../../../data/assignmentsData";

const TrainerGrading = () => {
  return (
    <div className="tg-page">
      <div className="tg-header">
        <h1>Assignment Grading</h1>
        <p>Review submissions and provide marks & feedback</p>
      </div>

      {assignmentsData.map((a) => (
        <div key={a.id} className="tg-assignment">
          <div className="tg-assignment-head">
            <h3>{a.title}</h3>
            <span className="badge open">Open</span>
          </div>

          <p className="muted">{a.description}</p>

          {a.submissions.length === 0 && (
            <p className="muted">No submissions yet.</p>
          )}

          {a.submissions.map((s, idx) => (
            <div key={idx} className="tg-row">
              {/* LEFT */}
              <div className="tg-info">
                <div className="student">
                  <strong>{s.studentId}</strong>
                  <span className="date">{s.submittedAt}</span>
                </div>

                <div className="file">📄 {s.studentFile}</div>
              </div>

              {/* RIGHT */}
              <div className="tg-grade">
                <input
                  type="number"
                  placeholder="Marks (out of 100)"
                  disabled
                />

                <textarea
                  placeholder="Write feedback for the student"
                  disabled
                />

                <div className="tg-actions">
                  <button className="save-btn" disabled>
                    Save Grade
                  </button>

                  <span className="hint">
                    (Backend integration pending)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TrainerGrading;
