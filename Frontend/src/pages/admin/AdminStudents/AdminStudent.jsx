import { useState } from "react";
import "./AdminStudent.css";

const data = [
  {
    course: "MERN Stack",
    students: [
      { id: 1, name: "Vipin Bhardwal", email: "vipin@gmail.com", phone: "9876543210", batch: "Morning", status: "Active" },
      { id: 2, name: "Ankit Sharma", email: "ankit@gmail.com", phone: "9123456780", batch: "Evening", status: "Active" },
    ],
  },
  {
    course: "UI/UX Design",
    students: [
      { id: 3, name: "Neha Verma", email: "neha@gmail.com", phone: "9988776655", batch: "Weekend", status: "Inactive" },
    ],
  },
];

const AdminStudent = () => {
  const [openCourse, setOpenCourse] = useState(null);

  return (
    <div className="admin-student-page">
      {/* Header */}
      <div className="as-header">
        <div>
          <h1>Students Management</h1>
          <p>View and manage students course-wise</p>
        </div>
        <button className="primary-btn">+ Add Student</button>
      </div>

      {/* Search */}
      <div className="as-search">
        <input type="text" placeholder="Search student..." />
      </div>

      {/* Course Sections */}
      <div className="as-courses">
        {data.map((courseBlock, idx) => (
          <div key={idx} className="as-course-block">
            <div
              className="as-course-header"
              onClick={() =>
                setOpenCourse(openCourse === idx ? null : idx)
              }
            >
              <h2>{courseBlock.course}</h2>
              <span>{courseBlock.students.length} Students</span>
            </div>

            {openCourse === idx && (
              <div className="as-student-grid">
                {courseBlock.students.map((s) => (
                  <div key={s.id} className="as-card">
                    <div className="as-card-header">
                      <h3>{s.name}</h3>
                      <span className={`status ${s.status.toLowerCase()}`}>
                        {s.status}
                      </span>
                    </div>

                    <div className="as-info">
                      <p><strong>Email:</strong> {s.email}</p>
                      <p><strong>Phone:</strong> {s.phone}</p>
                      <p><strong>Batch:</strong> {s.batch}</p>
                    </div>

                    <div className="as-actions">
                      <button className="view">View</button>
                      <button className="edit">Edit</button>
                      <button className="delete">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminStudent;
