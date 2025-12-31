// import "./studentSidebar.css";

// const StudentSidebar = () => {
//   return (
//     <aside className="ssb">
//       <div className="ssb-logo">
//         <span>🎓</span>
//         <div>
//           <b>IMS</b>
//           <p>Student Panel</p>
//         </div>
//       </div>

//       <nav className="ssb-nav">
//         <a className="active">Dashboard</a>
//         <a>My Profile</a>
//         <a>Attendance</a>
//         <a>Quizzes</a>
//         <a>Assignments</a>
//         <a>Performance</a>
//         <a>Notifications</a>
//       </nav>

//       <div className="ssb-user">
//         <div className="avatar">V</div>
//         <div>
//           <b>Vipin</b>
//           <p>vipin@gmail.com</p>
//         </div>
//       </div>

//       <button className="ssb-logout">Logout</button>
//     </aside>
//   );
// };

// export default StudentSidebar;

import "./student-sidebar.css";

const StudentSidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="logo">🎓</div>
        <h3>IMS</h3>
        <span>Student Panel</span>
      </div>

      <nav className="sidebar-nav">
        <a className="active">Dashboard</a>
        <a>My Profile</a>
        <a>Attendance</a>
        <a>Quizzes</a>
        <a>Assignments</a>
        <a>Performance</a>
        <a>Notifications</a>
      </nav>

      <div className="sidebar-footer">
        <div className="user">Vipin</div>
        <button>Logout</button>
      </div>
    </aside>
  );
};

export default StudentSidebar;
