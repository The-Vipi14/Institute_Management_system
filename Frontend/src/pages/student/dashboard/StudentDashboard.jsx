import "./student-dashboard.css";
import Quizzes from '../quiz/Quizzes'
const Dashboard = () => {
  return (
    <>
      <h1>Welcome back, Vipin!</h1>
      <p className="muted">Here's your academic overview</p>

      {/* TOP CARDS */}
      <div className="dash-top">
        <div className="card blue">
          <span>Current Course</span>
          <h2>Web Development Fundamentals</h2>
          <p>Code: CS101</p>
        </div>

        <div className="card">
          <h3>Attendance</h3>
          <strong>0%</strong>
          <p className="muted">0 days present</p>
        </div>

        <div className="card">
          <h3>Quiz Average</h3>
          <strong>0%</strong>
          <p className="muted">0 of 2 completed</p>
        </div>

        <div className="card">
          <h3>Assignments</h3>
          <strong>0%</strong>
          <p className="muted">0 of 2 submitted</p>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="dash-grid">
        <div className="card big">
          <h3>Attendance Trend (Last 14 Days)</h3>
          <div className="placeholder">Chart will appear here</div>
        </div>

        <div className="card">
          <h3>Quiz Performance</h3>
          {/* <div className="placeholder"> */}
            {/* No quiz results yet */}
            <Quizzes/>
            {/* </div> */}
        </div>

        <div className="card">
          <h3>Assignment Status</h3>
          <div className="donut">Pending</div>
        </div>

        <div className="card">
          <h3>Upcoming Deadlines</h3>
          <p className="muted">No upcoming deadlines</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
