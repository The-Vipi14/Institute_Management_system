// // src/pages/student/Performance.jsx
// import "./studentPerformance.css";

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
// } from "recharts";

// /* MOCK DATA */
// const progressData = [
//   { week: "W1", score: 20 },
//   { week: "W2", score: 40 },
//   { week: "W3", score: 55 },
//   { week: "W4", score: 70 },
//   { week: "W5", score: 80 },
// ];

// const scoreData = [
//   { name: "Quizzes", value: 60 },
//   { name: "Assignments", value: 40 },
// ];

// const Performance = () => {
//   return (
//     <div className="sp-page">
//       {/* Header */}
//       <div className="sp-header">
//         <h1>Performance</h1>
//         <p>Track your academic progress over time</p>
//       </div>

//       {/* Top stats */}
//       <div className="sp-cards">
//         <div className="sp-card primary">
//           <span>Overall Score</span>
//           <h2>80%</h2>
//         </div>

//         <div className="sp-card">
//           <span>Attendance</span>
//           <h3>85%</h3>
//         </div>

//         <div className="sp-card">
//           <span>Quiz Avg</span>
//           <h3>60%</h3>
//         </div>

//         <div className="sp-card">
//           <span>Assignment Avg</span>
//           <h3>40%</h3>
//         </div>
//       </div>

//       {/* Charts */}
//       <div className="sp-grid">
//         {/* Line chart */}
//         <div className="sp-box wide">
//           <h3>Overall Progress</h3>
//           <div className="chart-box">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={progressData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="week" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line
//                   type="monotone"
//                   dataKey="score"
//                   stroke="#2563eb"
//                   strokeWidth={3}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Bar chart */}
//         <div className="sp-box">
//           <h3>Score Distribution</h3>
//           <div className="chart-box">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={scoreData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="value" fill="#10b981" radius={[6, 6, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* Summary */}
//       <div className="sp-box">
//         <h3>Performance Summary</h3>
//         <p className="muted">
//           You are performing consistently well. Focus on improving assignment
//           submissions to increase your overall score.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Performance;



























import "./StudentPerformance.css";

const StudentPerformance = () => {
  return (
    <div className="sp-page">
      {/* Header */}
      <div className="sp-header">
        <h1>Performance</h1>
        <p>Your academic performance overview</p>
      </div>

      {/* Summary Cards */}
      <div className="sp-summary">
        <div className="sp-card">
          <h3>Average Score</h3>
          <p className="sp-score">85%</p>
        </div>

        <div className="sp-card">
          <h3>Assignments Completed</h3>
          <p className="sp-score">1 / 2</p>
        </div>

        <div className="sp-card">
          <h3>Status</h3>
          <span className="sp-badge good">Good</span>
        </div>
      </div>

      {/* Assignment Performance */}
      <div className="sp-section">
        <h2>Assignment Performance</h2>

        <div className="sp-assignment">
          <div>
            <h4>React Hooks Assignment</h4>
            <p>Practice useState, useEffect, and useContext.</p>
          </div>

          <div className="sp-right">
            <span className="sp-badge graded">Graded</span>
            <strong>85 / 100</strong>
          </div>
        </div>

        <div className="sp-assignment">
          <div>
            <h4>JavaScript Fundamentals</h4>
            <p>Explain closures, hoisting and promises.</p>
          </div>

          <div className="sp-right">
            <span className="sp-badge pending">Pending</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPerformance;
