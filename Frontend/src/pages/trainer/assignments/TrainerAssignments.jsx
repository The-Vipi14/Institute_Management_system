import { useState } from "react";
import "./TrainerAssignments.css";
import { assignmentsData } from "../../../data/assignmentsData";

const TrainerAssignments = () => {
  // local state wraps shared mock (simulate write)
  const [list, setList] = useState(assignmentsData);

  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    courseCode: "FS101", // trainer ka assigned course (mock)
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.file) return;

    const newAssignment = {
      id: Date.now(),
      title: form.title,
      description: form.description,
      dueDate: form.dueDate,
      courseCode: form.courseCode,
      teacherFile: form.file.name,
      submissions: [],
    };

    // update local list (shared mock simulation)
    setList((prev) => [...prev, newAssignment]);

    // reset form
    setForm({
      title: "",
      description: "",
      dueDate: "",
      courseCode: "FS101",
      file: null,
    });
  };

  return (
    <div className="ta-page">
      {/* Header */}
      <div className="ta-header">
        <h1>Assignments</h1>
        <p>Upload assignments for your course</p>
      </div>

      {/* Upload Form */}
      <form className="ta-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Assignment Title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Assignment Description"
          value={form.description}
          onChange={handleChange}
        />

        <div className="ta-row">
          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
          />

          <label className="file-upload">
            Upload PDF
            <input
              type="file"
              name="file"
              accept="application/pdf"
              hidden
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Upload Assignment
        </button>
      </form>

      {/* Uploaded Assignments */}
      <div className="ta-list">
        <h3>Uploaded Assignments</h3>

        {list.length === 0 && (
          <p className="muted">No assignments uploaded yet.</p>
        )}

        {list.map((a) => (
          <div key={a.id} className="ta-card">
            <div>
              <h4>{a.title}</h4>
              <p>{a.description}</p>
              <small>
                Due: {a.dueDate || "Not set"} | Course: {a.courseCode}
              </small>
            </div>
            <span className="file-name">📄 {a.teacherFile}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerAssignments;
