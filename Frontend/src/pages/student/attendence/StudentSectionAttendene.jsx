// src/pages/student/Attendance.jsx
import "./studentAttendance.css";

const Attendance = () => {
  return (
    <div className="sa-page">
      {/* Header */}
      <div className="sa-header">
        <h1>Attendance</h1>
        <p>Track your attendance records</p>
      </div>

      {/* Summary cards */}
      <div className="sa-cards">
        <div className="sa-card">
          <h3>Overall Attendance</h3>
          <span className="sa-value">87%</span>
          <p>Good standing</p>
        </div>

        <div className="sa-card">
          <h3>Classes Attended</h3>
          <span className="sa-value">26</span>
          <p>Out of 30</p>
        </div>

        <div className="sa-card">
          <h3>Missed Classes</h3>
          <span className="sa-value danger">4</span>
          <p>Needs attention</p>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="sa-table-box">
        <h2>Attendance History</h2>

        <table className="sa-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>12 Jan 2025</td>
              <td>Monday</td>
              <td><span className="status present">Present</span></td>
            </tr>
            <tr>
              <td>13 Jan 2025</td>
              <td>Tuesday</td>
              <td><span className="status present">Present</span></td>
            </tr>
            <tr>
              <td>14 Jan 2025</td>
              <td>Wednesday</td>
              <td><span className="status absent">Absent</span></td>
            </tr>
            <tr>
              <td>15 Jan 2025</td>
              <td>Thursday</td>
              <td><span className="status late">Late</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
