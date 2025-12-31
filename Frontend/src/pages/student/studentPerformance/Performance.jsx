// src/pages/student/Performance.jsx
import "./studentPerformance.css";

const Performance = () => {
  return (
    <div className="sp-page">
      {/* Header */}
      <div className="sp-header">
        <h1>Performance</h1>
        <p>Track your academic progress</p>
      </div>

      {/* Top stats */}
      <div className="sp-stats">
        <div className="sp-stat primary">
          <h4>Overall Score</h4>
          <span>0%</span>
        </div>

        <div className="sp-stat">
          <h4>Attendance</h4>
          <span>0%</span>
        </div>

        <div className="sp-stat">
          <h4>Quiz Average</h4>
          <span>0%</span>
        </div>

        <div className="sp-stat">
          <h4>Assignment Avg</h4>
          <span>0%</span>
        </div>
      </div>

      {/* Middle section */}
      <div className="sp-grid">
        <div className="sp-card">
          <h3>Performance Overview</h3>
          <div className="sp-placeholder">
            Chart will appear here
          </div>
        </div>

        <div className="sp-card">
          <h3>Quiz Progress</h3>
          <div className="sp-empty">
            No quiz data yet
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="sp-card">
        <h3>Assignment Scores</h3>
        <div className="sp-empty">
          No graded assignments yet
        </div>
      </div>
    </div>
  );
};

export default Performance;
