// import "./GradingModal.css";

// const GradingModal = ({ onClose }) => {
//   return (
//     <div className="gm-overlay" onClick={onClose}>
//       <div
//         className="gm-modal"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h2>Grade Assignment</h2>
//         <p>Provide marks and feedback</p>

//         <div className="gm-field">
//           <label>Marks (out of 100)</label>
//           <input type="number" placeholder="e.g. 85" />
//         </div>

//         <div className="gm-field">
//           <label>Feedback</label>
//           <textarea
//             placeholder="Write feedback for student"
//             rows="4"
//           ></textarea>
//         </div>

//         <div className="gm-actions">
//           <button className="gm-cancel" onClick={onClose}>
//             Cancel
//           </button>
//           <button className="gm-submit">
//             Submit Grade
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GradingModal;













import { useState } from "react";
import "./GradingModal.css";

const GradingModal = ({ onClose, onSubmit }) => {
  const [marks, setMarks] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (!marks) return;
    onSubmit({ marks, feedback });
  };

  return (
    <div className="gm-overlay" onClick={onClose}>
      <div className="gm-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Grade Assignment</h2>
        <p>Provide marks and feedback</p>

        <div className="gm-field">
          <label>Marks (out of 100)</label>
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </div>

        <div className="gm-field">
          <label>Feedback</label>
          <textarea
            rows="3"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>

        <div className="gm-actions">
          <button className="gm-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="gm-submit" onClick={handleSubmit}>
            Submit Grade
          </button>
        </div>
      </div>
    </div>
  );
};

export default GradingModal;
