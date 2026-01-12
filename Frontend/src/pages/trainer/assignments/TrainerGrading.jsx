// import { useState } from "react";
// import "./TrainerGrading.css";
// import GradingModal from "./GradingModal";

// const TrainerGrading = () => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div className="tg-page">
//       <div className="tg-header">
//         <h1>Assignment Grading</h1>
//         <p>Review submissions and provide grades</p>
//       </div>

//       <div className="tg-card">
//         <h3>React Hooks Assignment</h3>
//         <p className="tg-desc">
//           Practice useState, useEffect, and useContext.
//         </p>

//         <div className="tg-student">
//           <div>
//             <strong>Vipin</strong>
//             <p className="tg-file">
//               📄 vipin-react-hooks.pdf
//             </p>
//             <small>Submitted: 05 Oct 2024</small>
//           </div>

//           <button
//             className="tg-grade-btn"
//             onClick={() => setShowModal(true)}
//           >
//             Grade
//           </button>
//         </div>
//       </div>

//       {/* MODAL */}
//       {showModal && (
//         <GradingModal onClose={() => setShowModal(false)} />
//       )}
//     </div>
//   );
// };

// export default TrainerGrading;




















import { useState } from "react";
import "./TrainerGrading.css";
import GradingModal from "./GradingModal";

const TrainerGrading = () => {
  const [showModal, setShowModal] = useState(false);
  const [gradeData, setGradeData] = useState(null);

  const handleSubmitGrade = (data) => {
    setGradeData(data); // { marks, feedback }
    setShowModal(false);
  };

  return (
    <div className="tg-page">
      <div className="tg-header">
        <h1>Assignment Grading</h1>
        <p>Review submissions and provide grades</p>
      </div>

      <div className="tg-card">
        <h3>React Hooks Assignment</h3>
        <p className="tg-desc">
          Practice useState, useEffect, and useContext.
        </p>

        <div className="tg-student">
          <div>
            <strong>Vipin</strong>
            <div className="tg-file">📄 vipin-react-hooks.pdf</div>
            <small>Submitted: 05 Oct 2024</small>
          </div>

          <div>
            {!gradeData ? (
              <button
                className="tg-grade-btn"
                onClick={() => setShowModal(true)}
              >
                Grade
              </button>
            ) : (
              <div className="tg-graded">
                <span className="tg-badge">Graded</span>
                <strong>{gradeData.marks}/100</strong>
              </div>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <GradingModal
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmitGrade}
        />
      )}
    </div>
  );
};

export default TrainerGrading;
