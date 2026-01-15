// import "./Quizzes.css";

// const quizzes = [
//   {
//     id: 1,
//     title: "HTML Basics",
//     submissions: 5,
//     total: 5,
//     status: "Active",
//     created: "Dec 20, 2025",
//   },
//   {
//     id: 2,
//     title: "CSS Flexbox",
//     submissions: 3,
//     total: 5,
//     status: "Active",
//     created: "Dec 25, 2025",
//   },
//   {
//     id: 3,
//     title: "JavaScript Fundamentals",
//     submissions: 5,
//     total: 5,
//     status: "Completed",
//     created: "Dec 10, 2025",
//   },
// ];

// const Quizzes = () => {
//   return (
//     <div className="quizzes-page">
//       {/* Header */}
//       <div className="quizzes-header">
//         <div>
//           <h1>Quizzes</h1>
//           <p>Manage quizzes for your course</p>
//         </div>
//         <button className="btn-primary">+ Create Quiz</button>
//       </div>

//       {/* Stats */}
//       <div className="quiz-stats">
//         <div className="quiz-stat-card">
//           <strong>3</strong>
//           <span>Total Quizzes</span>
//         </div>
//         <div className="quiz-stat-card">
//           <strong>2</strong>
//           <span>Active</span>
//         </div>
//         <div className="quiz-stat-card">
//           <strong>1</strong>
//           <span>Completed</span>
//         </div>
//       </div>

//       {/* Quiz List */}
//       <div className="quiz-list">
//         <div className="quiz-row header">
//           <span>Title</span>
//           <span>Submissions</span>
//           <span>Status</span>
//           <span>Created</span>
//           <span>Actions</span>
//         </div>

//         {quizzes.map((q) => (
//           <div className="quiz-row" key={q.id}>
//             <span>{q.title}</span>
//             <span>{q.submissions}/{q.total}</span>
//             <span className={`status ${q.status.toLowerCase()}`}>
//               {q.status}
//             </span>
//             <span>{q.created}</span>
//             <div className="actions">
//               <button>👁 View</button>
//               <button>✏ Edit</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Quizzes;







import { useState } from "react";
import "./Quizzes.css";

const quizzes = [
  { id: 1, title: "HTML Basics", submissions: 5, total: 5, status: "Active", created: "Dec 20, 2025" },
  { id: 2, title: "CSS Flexbox", submissions: 3, total: 5, status: "Active", created: "Dec 25, 2025" },
];

const CreateQuizzes = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="quizzes-page">
      <div className="quizzes-header">
        <div>
          <h1>Quizzes</h1>
          <p>Manage quizzes for your course</p>
        </div>
        <button className="btn-primary" onClick={() => setShowModal(true)}>
          + Create Quiz
        </button>
      </div>

      <div className="quiz-list">
        <div className="quiz-row header">
          <span>Title</span>
          <span>Submissions</span>
          <span>Status</span>
          <span>Created</span>
          <span>Actions</span>
        </div>

        {quizzes.map((q) => (
          <div className="quiz-row" key={q.id}>
            <span>{q.title}</span>
            <span>{q.submissions}/{q.total}</span>
            <span className={`status ${q.status.toLowerCase()}`}>{q.status}</span>
            <span>{q.created}</span>
            <div className="actions">
              <button>👁 View</button>
              <button>✏ Edit</button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Create Quiz</h2>

            <form className="quiz-form">
              <input type="text" placeholder="Quiz Title" />
              <textarea placeholder="Description" />
              <input type="number" placeholder="Duration (minutes)" />
              <input type="number" placeholder="Total Marks" />
              <input type="date" />

              <div className="modal-actions">
                <button type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Save Quiz
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateQuizzes;
