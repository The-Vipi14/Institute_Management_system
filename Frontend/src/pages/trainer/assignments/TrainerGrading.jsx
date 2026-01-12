import { useState } from "react";
import "./TrainerGrading.css";
import GradingModal from "./GradingModal";

const TrainerGrading = () => {
  const [showModal, setShowModal] = useState(false);

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
            <p className="tg-file">
              📄 vipin-react-hooks.pdf
            </p>
            <small>Submitted: 05 Oct 2024</small>
          </div>

          <button
            className="tg-grade-btn"
            onClick={() => setShowModal(true)}
          >
            Grade
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <GradingModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default TrainerGrading;
