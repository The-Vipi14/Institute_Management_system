import { NavLink } from "react-router-dom";
import "./TrainerSidebar.css";

const TrainerSidebar = () => {
  return (
    <aside className="trainer-sidebar">
      {/* Top */}
      <div className="ts-top">
        <div className="ts-logo">👨‍🏫</div>
        <div>
          <h3>IMS</h3>
          <p>Trainer Panel</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="ts-nav">
        <NavLink to="/trainer/dashboard">Dashboard</NavLink>
        <NavLink to="/trainer/students">Students</NavLink>
        <NavLink to="/trainer/attendance">Attendance</NavLink>
        <NavLink to="/trainer/assignments">Assignments</NavLink>
        <NavLink to="/trainer/submissions">Submissions</NavLink>
        <NavLink to="/trainer/quizzes">Quizzes</NavLink>
        <NavLink to="/trainer/reports">Reports</NavLink>
      </nav>

      {/* Bottom */}
      <div className="ts-bottom">
        <div className="ts-user">
          <div className="avatar">T</div>
          <div>
            <strong>Trainer</strong>
            <span>trainer@ims.com</span>
          </div>
        </div>

        <button className="logout-btn">Logout</button>
      </div>
    </aside>
  );
};

export default TrainerSidebar;
