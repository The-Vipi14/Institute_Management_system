import { useState } from "react";
import "./TrainerGrading.css";
import { assignmentsData } from "../../../data/assignmentsData";

const TrainerGrading = () => {
  // clone to local state (simulate grading write)
  const [data, setData] = useState(assignmentsData);

  const handleGrade = (assignmentId, studentId, marks, feedback) => {
    setData((prev) =>
      prev.map((a) => {
        if (a.id !== assignmentId) return a;

        return {
          ...a,
          submissions: a.submissions.map((s) =>
            s.studentId === studentId
              ? {
                  ...s,
                  marks,
                  feedback,
                  graded: true,
                }
              : s
          ),
        };
      })
    );
  };

  return (
    <div className="tg-page">
      <div className="tg-header">
        <h1>Assignment Grading</h1>
        <p>Review submissions, add marks and feedback</p>
      </div>

      {data.map((a) => (
        <div key={a.id} className="tg-assignment">
          <h3>{a.title}</h3>
          <p className="muted">{a.description}</p>

          {a.submissions.length === 0 && (
            <p className="muted">No submissions yet.</p>
          )}

          {a.submissions.map((s) => (
            <div key={s.studentId} className="tg-row">
              <div className="tg-info">
                <strong>{s.studentId}</strong>
                <span className="file">📄 {s.studentFile}</span>
                <span className="date">{s.submittedAt}</span>
              </div>

              <div className="tg-grade">
                <input
                  type="number"
                  placeholder="Marks"
                  defaultValue={s.marks || ""}
                  onBlur={(e) =>
                    handleGrade(
                      a.id,
                      s.studentId,
                      e.target.value,
                      s.feedback || ""
                    )
                  }
                />

                <textarea
                  placeholder="Feedback"
                  defaultValue={s.feedback || ""}
                  onBlur={(e) =>
                    handleGrade(
                      a.id,
                      s.studentId,
                      s.marks || "",
                      e.target.value
                    )
                  }
                />

                {s.graded && (
                  <span className="graded">✔ Graded</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TrainerGrading;
