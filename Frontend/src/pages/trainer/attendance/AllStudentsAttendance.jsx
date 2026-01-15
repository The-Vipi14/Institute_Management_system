import "./Attendance.css";

const students = [
  { id: 1, name: "John Smith", email: "john@student.com" },
  { id: 2, name: "Emily Davis", email: "emily@student.com" },
  { id: 3, name: "Maria Garcia", email: "maria@student.com" },
  { id: 4, name: "Vipin", email: "rohan@asp.com" },
  { id: 5, name: "Vipin", email: "vipinbhardwal@gmail.com" },
];

const Attendance = () => {
  return (
    <div className="attendance-page">
      {/* Header */}
      <div className="attendance-header">
        <div>
          <h1>Attendance</h1>
          <p>Mark attendance for your students</p>
        </div>

        <div className="attendance-actions">
          <input type="date" defaultValue="2025-12-31" />
          <button className="btn-primary">Save Attendance</button>
        </div>
      </div>

      {/* Card */}
      <div className="attendance-card">
        <div className="attendance-date">
          Wednesday, December 31, 2025
        </div>

        <div className="attendance-table">
          <div className="attendance-row header">
            <span>Student</span>
            <span>Email</span>
            <span>Status</span>
          </div>

          {students.map((s) => (
            <div className="attendance-row" key={s.id}>
              <div className="student">
                <div className="avatar">{s.name[0]}</div>
                <span>{s.name}</span>
              </div>
              <span className="email">{s.email}</span>
              <div className="status">
                <button className="status-btn present">✔</button>
                <button className="status-btn late">🕒</button>
                <button className="status-btn absent">✖</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="attendance-legend">
        <span><i className="dot present"></i> Present</span>
        <span><i className="dot late"></i> Late</span>
        <span><i className="dot absent"></i> Absent</span>
      </div>
    </div>
  );
};

export default Attendance;
