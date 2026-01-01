// src/pages/student/Assignments.jsx
import "./studentAssignments.css";
import { useState } from "react";

/* MOCK DATA – Teacher uploaded assignments */
const initialAssignments = [
  {
    id: 1,
    title: "React Hooks Assignment",
    description: "Practice useState, useEffect, and useContext with examples.",
    dueDate: "2024-10-05",
    teacherFile: "react-hooks-assignment.pdf",
    submitted: false,
    studentFile: null,
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    description: "Explain closures, hoisting, promises with examples.",
    dueDate: "2024-10-02",
    teacherFile: "javascript-fundamentals.pdf",
    submitted: true,
    studentFile: "js-fundamentals-solution.pdf",
  },
];

const Assignments = () => {
  const [assignments, setAssignments] = useState(initialAssignments);

  const handleUpload = (id, file) => {
    if (!file) return;

    setAssignments((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              ...a,
              submitted: true,
              studentFile: file.name,
            }
          : a
      )
    );
  };

  return (
    <div className="sa-page">
      {/* Header */}
      <div className="sa-header">
        <h1>Assignments</h1>
        <p>
          Download assignments shared by your trainer and upload your solution
          in PDF format
        </p>
      </div>

      {/* Assignment List */}
      <div className="sa-list">
        {assignments.map((item) => (
          <div key={item.id} className="sa-card">
            {/* LEFT */}
            <div className="sa-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="sa-meta">
                <span>
                  Due: <b>{item.dueDate}</b>
                </span>

                {item.submitted ? (
                  <span className="status submitted">Submitted</span>
                ) : (
                  <span className="status pending">Pending</span>
                )}
              </div>

              {/* Teacher File */}
              <div className="teacher-file">
                <span>📄 Assignment File:</span>
                <a href="#" className="file-link">
                  {item.teacherFile}
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="sa-action">
              {item.submitted ? (
                <div className="file-info">
                  <span>✅ Your submission:</span>
                  <span className="file-name">
                    {item.studentFile}
                  </span>
                </div>
              ) : (
                <label className="upload-btn">
                  Upload Solution (PDF)
                  <input
                    type="file"
                    accept="application/pdf"
                    hidden
                    onChange={(e) =>
                      handleUpload(item.id, e.target.files[0])
                    }
                  />
                </label>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
