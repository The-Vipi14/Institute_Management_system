
// import "./student-sidebar.css";

// const StudentSidebar = () => {
//   return (
//     <aside className="student-sidebar">
//       {/* TOP */}
//       <div className="ss-top">
//         <div className="ss-logo">🎓</div>
//         <div>
//           <h3>IMS</h3>
//           <p>Student Panel</p>
//         </div>
//       </div>

//       {/* NAV */}
//       <nav className="ss-nav">
//         <a className="active">Dashboard</a>
//         <a>My Profile</a>
//         <a>Attendance</a>
//         <a>Quizzes</a>
//         <a>Assignments</a>
//         <a>Performance</a>
//         <a>Notifications</a>
//       </nav>

//       {/* BOTTOM */}
//       <div className="ss-bottom">
//         <div className="ss-user">
//           <div className="avatar">V</div>
//           <div>
//             <strong>Vipin</strong>
//             <span>vipin@gmail.com</span>
//           </div>
//         </div>

//         <button className="logout-btn">Logout</button>
//       </div>
//     </aside>
//   );
// };

// export default StudentSidebar;
import { NavLink } from "react-router-dom";
import "./student-sidebar.css";

const StudentSidebar = () => {
  return (
    <aside className="student-sidebar">
      {/* ===== TOP ===== */}
      <div className="ss-top">
        <div className="ss-logo">🎓</div>
        <div>
          <h3>IMS</h3>
          <p>Student Panel</p>
        </div>
      </div>

      {/* ===== NAVIGATION ===== */}
      <nav className="ss-nav">
        <NavLink
          to="/student/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/student/profile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          My Profile
        </NavLink>

        <NavLink
          to="/student/attendance"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Attendance
        </NavLink>

        <NavLink
          to="/student/quizzes"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Quizzes
        </NavLink>

        <NavLink
          to="/student/assignments"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Assignments
        </NavLink>

        <NavLink
          to="/student/performance"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Performance
        </NavLink>

        <NavLink
          to="/student/notifications"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Notifications
        </NavLink>
      </nav>

      {/* ===== BOTTOM ===== */}
      <div className="ss-bottom">
        <div className="ss-user">
          <div className="avatar">V</div>
          <div>
            <strong>Vipin</strong>
            <span>vipin@gmail.com</span>
          </div>
        </div>

        <button className="logout-btn">Logout</button>
      </div>
    </aside>
  );
};

export default StudentSidebar;
