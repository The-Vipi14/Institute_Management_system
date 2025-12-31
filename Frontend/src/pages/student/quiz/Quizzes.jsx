// src/pages/student/Quizzes.jsx
import "./studentQuizzes.css";

const Quizzes = () => {
  return (
    <div className="sq-page">
      {/* Header */}
      <div className="sq-header">
        <h1>Quizzes</h1>
        <p>View and attempt your course quizzes</p>
      </div>

      {/* Summary cards */}
      <div className="sq-cards">
        <div className="sq-card">
          <h3>Total Quizzes</h3>
          <span className="sq-value">4</span>
        </div>

        <div className="sq-card">
          <h3>Completed</h3>
          <span className="sq-value success">2</span>
        </div>

        <div className="sq-card">
          <h3>Pending</h3>
          <span className="sq-value warning">2</span>
        </div>
      </div>

      {/* Quiz list */}
      <div className="sq-table-box">
        <h2>Quiz List</h2>

        <table className="sq-table">
          <thead>
            <tr>
              <th>Quiz Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Score</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>HTML Basics</td>
              <td>10 Jan 2025</td>
              <td><span className="badge completed">Completed</span></td>
              <td>8 / 10</td>
              <td>
                <button className="btn-view">View</button>
              </td>
            </tr>

            <tr>
              <td>CSS Fundamentals</td>
              <td>14 Jan 2025</td>
              <td><span className="badge completed">Completed</span></td>
              <td>7 / 10</td>
              <td>
                <button className="btn-view">View</button>
              </td>
            </tr>

            <tr>
              <td>JavaScript Basics</td>
              <td>20 Jan 2025</td>
              <td><span className="badge pending">Pending</span></td>
              <td>—</td>
              <td>
                <button className="btn-start">Start</button>
              </td>
            </tr>

            <tr>
              <td>DOM Manipulation</td>
              <td>25 Jan 2025</td>
              <td><span className="badge pending">Pending</span></td>
              <td>—</td>
              <td>
                <button className="btn-start">Start</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Quizzes;
