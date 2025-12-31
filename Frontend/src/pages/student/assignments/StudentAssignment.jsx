// src/pages/student/Assignments.jsx
import "./studentAssignments.css";

const Assignments = () => {
  return (
    <div className="sa-page">
      {/* Header */}
      <div className="sa-header">
        <h1>Assignments</h1>
        <p>Track your assignments and submission status</p>
      </div>

      {/* Summary cards */}
      <div className="sa-cards">
        <div className="sa-card">
          <h3>Total Assignments</h3>
          <span className="sa-value">5</span>
        </div>

        <div className="sa-card">
          <h3>Submitted</h3>
          <span className="sa-value success">3</span>
        </div>

        <div className="sa-card">
          <h3>Pending</h3>
          <span className="sa-value warning">2</span>
        </div>
      </div>

      {/* Assignment list */}
      <div className="sa-table-box">
        <h2>Assignment List</h2>

        <table className="sa-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Grade</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>HTML Structure</td>
              <td>12 Jan 2025</td>
              <td><span className="badge submitted">Submitted</span></td>
              <td>8 / 10</td>
              <td>
                <button className="btn-view">View</button>
              </td>
            </tr>

            <tr>
              <td>CSS Layout</td>
              <td>18 Jan 2025</td>
              <td><span className="badge submitted">Submitted</span></td>
              <td>7 / 10</td>
              <td>
                <button className="btn-view">View</button>
              </td>
            </tr>

            <tr>
              <td>JavaScript Basics</td>
              <td>24 Jan 2025</td>
              <td><span className="badge pending">Pending</span></td>
              <td>—</td>
              <td>
                <button className="btn-upload">Upload</button>
              </td>
            </tr>

            <tr>
              <td>DOM Manipulation</td>
              <td>30 Jan 2025</td>
              <td><span className="badge pending">Pending</span></td>
              <td>—</td>
              <td>
                <button className="btn-upload">Upload</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignments;
