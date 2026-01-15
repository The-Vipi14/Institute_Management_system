import { useState } from "react";
import "./AdminCourses.css";

const initialCourses = [
  {
    id: 1,
    name: "Web Development Fundamentals",
    code: "CS101",
    duration: "12 weeks",
    fee: "₹10,000",
    students: 5,
    poster: "📘",
    syllabus: "web-dev.pdf",
    description: "Learn HTML, CSS, JS and basics of full-stack.",
  },
  {
    id: 2,
    name: "Data Science with Python",
    code: "DS201",
    duration: "16 weeks",
    fee: "₹15,000",
    students: 3,
    poster: "📊",
    syllabus: "data-science.pdf",
    description: "Python, NumPy, Pandas, ML basics.",
  },
];

const AdminCourses = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [activeCourse, setActiveCourse] = useState(null);
  const [mode, setMode] = useState(null); // view | edit | add

  const openModal = (type, course = null) => {
    setMode(type);
    setActiveCourse(course);
  };

  const closeModal = () => {
    setMode(null);
    setActiveCourse(null);
  };

  return (
    <div className="admin-courses-page">
      <div className="courses-header">
        <div>
          <h1>Courses</h1>
          <p>Manage all institute courses</p>
        </div>
        <button className="btn-primary" onClick={() => openModal("add")}>
          + Add New Course
        </button>
      </div>

      <div className="courses-grid">
        {courses.map((c) => (
          <div className="course-card" key={c.id}>
            <div className="course-poster">{c.poster}</div>

            <h3>{c.name}</h3>
            <p className="course-code">{c.code}</p>

            <div className="course-meta">
              <span>⏳ {c.duration}</span>
              <span>💰 {c.fee}</span>
              <span>👥 {c.students} students</span>
            </div>

            <div className="course-actions">
              <button onClick={() => openModal("view", c)}>View</button>
              <button onClick={() => openModal("edit", c)}>Edit</button>
              <button className="danger">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {mode && (
        <div className="modal-backdrop">
          <div className="modal">
            {mode === "view" && (
              <>
                <h2>{activeCourse.name}</h2>
                <p>{activeCourse.description}</p>
                <p><strong>Code:</strong> {activeCourse.code}</p>
                <p><strong>Duration:</strong> {activeCourse.duration}</p>
                <p><strong>Fee:</strong> {activeCourse.fee}</p>
                <p><strong>Syllabus:</strong> {activeCourse.syllabus}</p>
                <button onClick={closeModal}>Close</button>
              </>
            )}

            {(mode === "edit" || mode === "add") && (
              <>
                <h2>{mode === "add" ? "Add Course" : "Edit Course"}</h2>
                <form className="course-form">
                  <input placeholder="Course Name" defaultValue={activeCourse?.name} />
                  <input placeholder="Course Code" defaultValue={activeCourse?.code} />
                  <input placeholder="Duration" defaultValue={activeCourse?.duration} />
                  <input placeholder="Fee" defaultValue={activeCourse?.fee} />
                  <input type="file" />
                  <textarea placeholder="Description" defaultValue={activeCourse?.description} />

                  <div className="modal-actions">
                    <button type="button" onClick={closeModal}>Cancel</button>
                    <button type="submit" className="btn-primary">Save</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCourses;
