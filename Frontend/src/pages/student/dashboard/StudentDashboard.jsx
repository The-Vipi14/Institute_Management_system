// import "./student-dashboard.css";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// /* ===== MOCK DATA ===== */
// const attendanceData = [
//   { day: "Mon", present: 1 },
//   { day: "Tue", present: 1 },
//   { day: "Wed", present: 0 },
//   { day: "Thu", present: 1 },
//   { day: "Fri", present: 1 },
// ];

// const quizData = [
//   { name: "Completed", value: 0 },
//   { name: "Pending", value: 2 },
// ];

// const COLORS = ["#2563eb", "#e5e7eb"];

// const StudentDashboard = () => {
//   return (
//     <div className="sd-page">
//       {/* Header */}
//       <div className="sd-header">
//         <h1>Welcome back, Vipin!</h1>
//         <p>Here's your academic overview</p>
//       </div>

//       {/* Top Cards */}
//       <div className="sd-cards">
//         <div className="sd-card primary">
//           <span>Current Course</span>
//           <h2>Web Development Fundamentals</h2>
//           <small>Code: CS101</small>
//         </div>

//         <div className="sd-card">
//           <span>Attendance</span>
//           <h3>0%</h3>
//           <small>0 days present</small>
//         </div>

//         <div className="sd-card">
//           <span>Quiz Average</span>
//           <h3>0%</h3>
//           <small>0 of 2 completed</small>
//         </div>

//         <div className="sd-card">
//           <span>Assignments</span>
//           <h3>0%</h3>
//           <small>0 of 2 submitted</small>
//         </div>
//       </div>

//       {/* Course + Trainer */}
//       <div className="sd-grid">
//         <div className="sd-box">
//           <h3>Course Details</h3>
//           <div className="sd-list">
//             <p><span>Course Name</span>Web Development Fundamentals</p>
//             <p><span>Duration</span>12 weeks</p>
//             <p><span>Status</span><b className="active">Active</b></p>
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

//       {/* Attendance Chart */}
//       <div className="sd-box">
//         <h3>Attendance Trend (Last 14 Days)</h3>
//         <div className="chart-box">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={attendanceData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="day" />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="present"
//                 stroke="#2563eb"
//                 strokeWidth={3}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Bottom Grid */}
//       <div className="sd-grid">
//         <div className="sd-box">
//           <h3>Quiz Performance</h3>
//           <div className="chart-box">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={quizData}
//                   dataKey="value"
//                   innerRadius={60}
//                   outerRadius={85}
//                 >
//                   {quizData.map((_, i) => (
//                     <Cell key={i} fill={COLORS[i]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//           <p className="muted center">No quiz results yet</p>
//         </div>

//         <div className="sd-box">
//           <h3>Assignment Status</h3>
//           <div className="donut">
//             <span>Pending</span>
//           </div>
//         </div>
//       </div>

//       {/* Upcoming */}
//       <div className="sd-box">
//         <h3>Upcoming Deadlines</h3>
//         <p className="muted">No upcoming deadlines</p>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;








import "./student-dashboard.css";

const StudentDashboard = () => {
  return (
    <div className="sd-page">
      {/* Header */}
      <div className="sd-header">
        <h1>Welcome back, Vipin 👋</h1>
        <p>Your academic overview</p>
      </div>

      {/* Top Cards */}
      <div className="sd-cards">
        <div className="sd-card primary">
          <span>Current Course</span>
          <h2>Full Stack Development</h2>
          <small>Course Code: FS101</small>
        </div>

        <div className="sd-card">
          <span>Attendance</span>
          <h3>80%</h3>
          <small>4 / 5 days</small>
        </div>

        <div className="sd-card">
          <span>Quiz Average</span>
          <h3>70%</h3>
          <small>1 of 2 attempted</small>
        </div>

        <div className="sd-card graded">
          <span>Assignments</span>
          <h3>85%</h3>
          <small className="badge">Graded</small>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="sd-section">
        <h2>Recent Assignment</h2>

        <div className="sd-activity">
          <div>
            <h4>React Hooks Assignment</h4>
            <p>Your assignment has been graded</p>
          </div>

          <div className="sd-right">
            <span className="sd-badge success">85 / 100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
