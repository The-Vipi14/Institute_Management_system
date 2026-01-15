import "./Students.css";

const students = [
  {
    id: 1,
    name: "John Smith",
    email: "john@student.com",
    attendance: 87,
    quiz: 85,
    joined: "Jan 2024",
  },
  {
    id: 2,
    name: "Emily Davis",
    email: "emily@student.com",
    attendance: 87,
    quiz: 80,
    joined: "Jan 2024",
  },
  {
    id: 3,
    name: "Maria Garcia",
    email: "maria@student.com",
    attendance: 78,
    quiz: 70,
    joined: "Feb 2024",
  },
  {
    id: 4,
    name: "Vipin",
    email: "rohan@asp.com",
    attendance: 0,
    quiz: 100,
    joined: "Dec 2025",
  },
  {
    id: 5,
    name: "Vipin",
    email: "vipinbhardwal@gmail.com",
    attendance: 0,
    quiz: 0,
    joined: "Dec 2025",
  },
];

const AllStudents = () => {
  return (
    <div className="students-page">
      {/* Header */}
      <div className="students-header">
        <div>
          <h1>Students</h1>
          <p>Manage students enrolled in your course</p>
        </div>
        <div className="students-count">
          👥 {students.length} Students
        </div>
      </div>

      {/* Grid */}
      <div className="students-grid">
        {students.map((s) => (
          <div className="student-card" key={s.id}>
            <div className="card-top-bar" />

            <div className="student-info">
              <div className="avatar">{s.name[0]}</div>
              <div>
                <h3>{s.name}</h3>
                <p className="email">✉ {s.email}</p>
              </div>
            </div>

            <div className="stats">
              <div className="stat-box">
                <strong>{s.attendance}%</strong>
                <span>Attendance</span>
              </div>
              <div className="stat-box">
                <strong>{s.quiz}%</strong>
                <span>Quiz Avg</span>
              </div>
            </div>

            <div className="joined">
              📅 Joined {s.joined}
            </div>

            <button className="details-btn">👁 View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStudents;
