// // src/pages/student/Assignments.jsx
// import "./studentAssignments.css";
// import { useState } from "react";

// /* MOCK DATA – Teacher uploaded assignments */
// const initialAssignments = [
//   {
//     id: 1,
//     title: "React Hooks Assignment",
//     description: "Practice useState, useEffect, and useContext with examples.",
//     dueDate: "2024-10-05",
//     teacherFile: "react-hooks-assignment.pdf",
//     submitted: false,
//     studentFile: null,
//   },
//   {
//     id: 2,
//     title: "JavaScript Fundamentals",
//     description: "Explain closures, hoisting, promises with examples.",
//     dueDate: "2024-10-02",
//     teacherFile: "javascript-fundamentals.pdf",
//     submitted: true,
//     studentFile: "js-fundamentals-solution.pdf",
//   },
// ];

// const Assignments = () => {
//   const [assignments, setAssignments] = useState(initialAssignments);

//   const handleUpload = (id, file) => {
//     if (!file) return;

//     setAssignments((prev) =>
//       prev.map((a) =>
//         a.id === id
//           ? {
//               ...a,
//               submitted: true,
//               studentFile: file.name,
//             }
//           : a
//       )
//     );
//   };

//   return (
//     <div className="sa-page">
//       {/* Header */}
//       <div className="sa-header">
//         <h1>Assignments</h1>
//         <p>
//           Download assignments shared by your trainer and upload your solution
//           in PDF format
//         </p>
//       </div>

//       {/* Assignment List */}
//       <div className="sa-list">
//         {assignments.map((item) => (
//           <div key={item.id} className="sa-card">
//             {/* LEFT */}
//             <div className="sa-info">
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>

//               <div className="sa-meta">
//                 <span>
//                   Due: <b>{item.dueDate}</b>
//                 </span>

//                 {item.submitted ? (
//                   <span className="status submitted">Submitted</span>
//                 ) : (
//                   <span className="status pending">Pending</span>
//                 )}
//               </div>

//               {/* Teacher File */}
//               <div className="teacher-file">
//                 <span>📄 Assignment File:</span>
//                 <a href="#" className="file-link">
//                   {item.teacherFile}
//                 </a>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="sa-action">
//               {item.submitted ? (
//                 <div className="file-info">
//                   <span>✅ Your submission:</span>
//                   <span className="file-name">
//                     {item.studentFile}
//                   </span>
//                 </div>
//               ) : (
//                 <label className="upload-btn">
//                   Upload Solution (PDF)
//                   <input
//                     type="file"
//                     accept="application/pdf"
//                     hidden
//                     onChange={(e) =>
//                       handleUpload(item.id, e.target.files[0])
//                     }
//                   />
//                 </label>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Assignments;


// import { useState } from "react";
// import './studentAssignments.css'
// import { assignmentsData } from "../../../data/assignmentsData";

// // mock logged-in student
// const STUDENT_ID = "STU001";
// const STUDENT_COURSE = "FS101";

// const StudentAssignment = () => {
//   // read shared data, then manage locally (simulate submit)
//   const [list, setList] = useState(
//     assignmentsData.filter((a) => a.courseCode === STUDENT_COURSE)
//   );

//   const handleUpload = (assignmentId, file) => {
//     if (!file) return;

//     setList((prev) =>
//       prev.map((a) => {
//         if (a.id !== assignmentId) return a;

//         const alreadySubmitted = a.submissions.some(
//           (s) => s.studentId === STUDENT_ID
//         );

//         if (alreadySubmitted) return a;

//         return {
//           ...a,
//           submissions: [
//             ...a.submissions,
//             {
//               studentId: STUDENT_ID,
//               studentFile: file.name,
//               submittedAt: new Date().toISOString().slice(0, 10),
//             },
//           ],
//         };
//       })
//     );
//   };

//   return (
//     <div className="sa-page">
//       <div className="sa-header">
//         <h1>Assignments</h1>
//         <p>View assignments shared by your trainer and submit your solution</p>
//       </div>

//       <div className="sa-list">
//         {list.length === 0 && (
//           <p className="muted">No assignments for your course.</p>
//         )}

//         {list.map((a) => {
//           const mySubmission = a.submissions.find(
//             (s) => s.studentId === STUDENT_ID
//           );

//           return (
//             <div key={a.id} className="sa-card">
//               {/* Left */}
//               <div className="sa-info">
//                 <h3>{a.title}</h3>
//                 <p>{a.description}</p>

//                 <div className="sa-meta">
//                   <span>
//                     Due: <b>{a.dueDate || "Not set"}</b>
//                   </span>

//                   {mySubmission ? (
//                     <span className="status submitted">Submitted</span>
//                   ) : (
//                     <span className="status pending">Pending</span>
//                   )}
//                 </div>

//                 {/* Teacher file */}
//                 <div className="teacher-file">
//                   <span>📄 Assignment File:</span>
//                   <a href="#" className="file-link">
//                     {a.teacherFile}
//                   </a>
//                 </div>
//               </div>

//               {/* Right */}
//               <div className="sa-action">
//                 {mySubmission ? (
//                   <div className="file-info">
//                     <span>✅ Your submission:</span>
//                     <span className="file-name">{mySubmission.studentFile}</span>
//                   </div>
//                 ) : (
//                   <label className="upload-btn">
//                     Upload Solution (PDF)
//                     <input
//                       type="file"
//                       accept="application/pdf"
//                       hidden
//                       onChange={(e) =>
//                         handleUpload(a.id, e.target.files[0])
//                       }
//                     />
//                   </label>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default StudentAssignment;


import "./studentAssignments.css";
import { assignmentsData } from "../../../data/assignmentsData";

const STUDENT_ID = "STU001";
const STUDENT_COURSE = "FS101";

const StudentAssignment = () => {
  const list = assignmentsData.filter(
    (a) => a.courseCode === STUDENT_COURSE
  );

  return (
    <div className="sa-page">
      {/* Header */}
      <div className="sa-header">
        <h1>Assignments</h1>
        <p>View assignments shared by your trainer</p>
      </div>

      {/* Empty */}
      {list.length === 0 && (
        <div className="sa-empty">
          <p>No assignments available yet.</p>
        </div>
      )}

      {/* List */}
      <div className="sa-list">
        {list.map((a) => {
          const mySubmission = a.submissions?.find(
            (s) => s.studentId === STUDENT_ID
          );

          return (
            <div key={a.id} className="sa-card">
              {/* Left */}
              <div className="sa-info">
                <div className="sa-title-row">
                  <h3>{a.title}</h3>

                  {!mySubmission && (
                    <span className="badge pending">Pending</span>
                  )}

                  {mySubmission && !mySubmission.graded && (
                    <span className="badge submitted">Submitted</span>
                  )}

                  {mySubmission?.graded && (
                    <span className="badge graded">Graded</span>
                  )}
                </div>

                <p className="desc">{a.description}</p>

                <div className="sa-meta">
                  <span>
                    📅 Due: <b>{a.dueDate || "Not set"}</b>
                  </span>
                </div>

                <div className="teacher-file">
                  <span>📄 Assignment File</span>
                  <button className="link-btn">
                    {a.teacherFile || "View PDF"}
                  </button>
                </div>

                {mySubmission?.graded && (
                  <div className="grade-box">
                    <div>
                      <strong>Marks:</strong> {mySubmission.marks}
                    </div>
                    <div>
                      <strong>Feedback:</strong>{" "}
                      {mySubmission.feedback || "—"}
                    </div>
                  </div>
                )}
              </div>

              {/* Right */}
              <div className="sa-action">
                {!mySubmission && (
                  <button className="upload-btn">
                    Upload Solution (PDF)
                  </button>
                )}

                {mySubmission && !mySubmission.graded && (
                  <p className="muted">Waiting for grading</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentAssignment;
