// // src/pages/student/Notifications.jsx
// import "./studentNotifications.css";

// import { useState } from "react";

// const dummyNotifications = [
//   {
//     id: 1,
//     type: "assignment",
//     title: "New Assignment Uploaded",
//     message: "React Hooks assignment has been uploaded.",
//     time: "2 hours ago",
//     read: false,
//   },
//   {
//     id: 2,
//     type: "quiz",
//     title: "Quiz Available",
//     message: "JavaScript Basics quiz is now live.",
//     time: "Yesterday",
//     read: false,
//   },
//   {
//     id: 3,
//     type: "assignment",
//     title: "Assignment Graded",
//     message: "Your HTML assignment has been graded.",
//     time: "2 days ago",
//     read: true,
//   },
// ];

// const Notifications = () => {
//   const [filter, setFilter] = useState("all");
//   const [notifications, setNotifications] = useState(dummyNotifications);

//   const filteredData =
//     filter === "all"
//       ? notifications
//       : notifications.filter((n) => n.type === filter);

//   const markAsRead = (id) => {
//     setNotifications((prev) =>
//       prev.map((n) =>
//         n.id === id ? { ...n, read: true } : n
//       )
//     );
//   };

//   return (
//     <div className="sn-page">
//       {/* Header */}
//       <div className="sn-header">
//         <h1>Notifications</h1>
//         <p>Stay updated with assignments & quizzes</p>
//       </div>

//       {/* Filter buttons */}
//       <div className="sn-filters">
//         <button
//           className={filter === "all" ? "active" : ""}
//           onClick={() => setFilter("all")}
//         >
//           All
//         </button>
//         <button
//           className={filter === "assignment" ? "active" : ""}
//           onClick={() => setFilter("assignment")}
//         >
//           Assignments
//         </button>
//         <button
//           className={filter === "quiz" ? "active" : ""}
//           onClick={() => setFilter("quiz")}
//         >
//           Quizzes
//         </button>
//       </div>

//       {/* Notification List */}
//       <div className="sn-list">
//         {filteredData.length === 0 && (
//           <div className="sn-empty">No notifications</div>
//         )}

//         {filteredData.map((item) => (
//           <div
//             key={item.id}
//             className={`sn-card ${item.read ? "read" : "unread"}`}
//           >
//             <div className="sn-left">
//               <div className={`sn-dot ${item.type}`} />
//               <div>
//                 <h3>{item.title}</h3>
//                 <p>{item.message}</p>
//                 <span>{item.time}</span>
//               </div>
//             </div>

//             {!item.read && (
//               <button
//                 className="mark-btn"
//                 onClick={() => markAsRead(item.id)}
//               >
//                 Mark as read
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Notifications;














import "./StudentNotification.css";

const StudentNotification = () => {
  return (
    <div className="sn-page">
      {/* Header */}
      <div className="sn-header">
        <h1>Notifications</h1>
        <p>Stay updated with assignments, quizzes and grading</p>
      </div>

      {/* Notification List */}
      <div className="sn-list">
        {/* Graded Assignment */}
        <div className="sn-card unread">
          <div className="sn-left">
            <span className="sn-icon success">✔</span>
          </div>

          <div className="sn-content">
            <h4>Assignment Graded</h4>
            <p>
              Your <strong>React Hooks Assignment</strong> has been graded.
            </p>
            <span className="sn-meta">Score: 85 / 100</span>
          </div>

          <span className="sn-badge">NEW</span>
        </div>

        {/* Pending Assignment */}
        <div className="sn-card">
          <div className="sn-left">
            <span className="sn-icon warning">⏰</span>
          </div>

          <div className="sn-content">
            <h4>Assignment Pending</h4>
            <p>
              <strong>JavaScript Fundamentals</strong> assignment is still
              pending.
            </p>
            <span className="sn-meta">Due: 10 Oct 2024</span>
          </div>
        </div>

        {/* Quiz Info */}
        <div className="sn-card">
          <div className="sn-left">
            <span className="sn-icon info">📝</span>
          </div>

          <div className="sn-content">
            <h4>New Quiz Available</h4>
            <p>Quiz on React Basics is now available.</p>
            <span className="sn-meta">2 questions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentNotification;
