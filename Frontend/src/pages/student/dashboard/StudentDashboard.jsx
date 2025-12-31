// import "./student-dashboard.css";

// const StudentDashboard = () => {
//   return (
//     <div className="sd-dashboard">

//       {/* ===== HEADER ===== */}
//       <div className="sd-header">
//         <h1>Welcome back, Vipin!</h1>
//         <p>Here's your academic overview</p>
//       </div>

//       {/* ===== STATS CARDS ===== */}
//       <div className="sd-cards">
//         <div className="sd-card primary">
//           <p className="label">Current Course</p>
//           <h2>Web Development Fundamentals</h2>
//           <span>Code: CS101</span>
//         </div>

//         <div className="sd-card">
//           <p className="label">Attendance</p>
//           <h2>0%</h2>
//           <span>0 days present</span>
//         </div>

//         <div className="sd-card">
//           <p className="label">Quiz Average</p>
//           <h2>0%</h2>
//           <span>0 of 2 completed</span>
//         </div>

//         <div className="sd-card">
//           <p className="label">Assignments</p>
//           <h2>0%</h2>
//           <span>0 of 2 submitted</span>
//         </div>
//       </div>

//       {/* ===== DETAILS ROW ===== */}
//       <div className="sd-row">
//         <div className="sd-box">
//           <h3>Course Details</h3>
//           <div className="sd-detail">
//             <span>Course Name</span>
//             <b>Web Development Fundamentals</b>
//           </div>
//           <div className="sd-detail">
//             <span>Duration</span>
//             <b>12 weeks</b>
//           </div>
//           <div className="sd-detail">
//             <span>Status</span>
//             <b className="status active">Active</b>
//           </div>
//         </div>

//         <div className="sd-box">
//           <h3>Your Trainer</h3>
//           <div className="trainer">
//             <div className="avatar">D</div>
//             <div>
//               <b>Dr. Sarah Johnson</b>
//               <p>sarah@institute.com</p>
//               <p>+1 234 567 8901</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ===== CHART PLACEHOLDERS ===== */}
//       <div className="sd-row">
//         <div className="sd-box chart">
//           <h3>Attendance Trend (Last 14 Days)</h3>
//           <div className="placeholder">Chart will appear here</div>
//         </div>

//         <div className="sd-box chart">
//           <h3>Quiz Performance</h3>
//           <div className="placeholder">No quiz results yet</div>
//         </div>
//       </div>

//       {/* ===== BOTTOM ROW ===== */}
//       <div className="sd-row">
//         <div className="sd-box">
//           <h3>Assignment Status</h3>
//           <div className="placeholder circle">Pending</div>
//         </div>

//         <div className="sd-box">
//           <h3>Upcoming Deadlines</h3>
//           <p className="muted">No upcoming deadlines</p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default StudentDashboard;


// import "./student-dashboard.css";

// const Dashboard = () => {
//   return (
//     <div className="sd-page">
//       <h1>Welcome back, Vipin!</h1>
//       <p className="muted">Here's your academic overview</p>

//       {/* Top cards */}
//       <div className="sd-cards">
//         <div className="sd-card blue">
//           <p>Current Course</p>
//           <h2>Web Development Fundamentals</h2>
//           <span>Code: CS101</span>
//         </div>

//         <div className="sd-card">
//           <h3>Attendance</h3>
//           <b>0%</b>
//           <span>0 days present</span>
//         </div>

//         <div className="sd-card">
//           <h3>Quiz Average</h3>
//           <b>0%</b>
//           <span>0 of 2 completed</span>
//         </div>

//         <div className="sd-card">
//           <h3>Assignments</h3>
//           <b>0%</b>
//           <span>0 of 2 submitted</span>
//         </div>
//       </div>

//       {/* Middle */}
//       <div className="sd-grid">
//         <div className="sd-box">
//           <h3>Attendance Trend (Last 14 Days)</h3>
//           <div className="placeholder">Chart will appear here</div>
//         </div>

//         <div className="sd-box">
//           <h3>Quiz Performance</h3>
//           <div className="placeholder">No quiz results yet</div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="sd-grid">
//         <div className="sd-box">
//           <h3>Assignment Status</h3>
//           <div className="circle">Pending</div>
//         </div>

//         <div className="sd-box">
//           <h3>Upcoming Deadlines</h3>
//           <p className="muted">No upcoming deadlines</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import "./student-dashboard.css";

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
          <div className="placeholder">No quiz results yet</div>
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
