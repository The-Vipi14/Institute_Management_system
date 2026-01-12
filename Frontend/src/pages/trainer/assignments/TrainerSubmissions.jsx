import "./TrainerSubmissions.css";

const TrainerSubmissions = () => {
  return (
    <div className="ts-page">
      {/* Header */}
      <div className="ts-header">
        <h1>Submissions</h1>
        <p>Review student assignment submissions</p>
      </div>

      {/* Submission List */}
      <div className="ts-list">

        {/* Submission Card */}
        <div className="ts-card">
          <div className="ts-left">
            <h3>React Hooks Assignment</h3>
            <p className="muted">
              Student: <strong>Vipin</strong> (vipin@gmail.com)
            </p>

            <div className="ts-meta">
              <span>📄 vipin-react-hooks.pdf</span>
              <span>📅 Submitted: 05 Oct 2024</span>
            </div>
          </div>

          <div className="ts-right">
            <span className="ts-badge pending">Pending</span>

            <div className="ts-actions">
              <button className="outline">View PDF</button>
              <button className="primary">Grade</button>
            </div>
          </div>
        </div>

        {/* Another Submission */}
        <div className="ts-card">
          <div className="ts-left">
            <h3>JavaScript Fundamentals</h3>
            <p className="muted">
              Student: <strong>Aman</strong> (aman@gmail.com)
            </p>

            <div className="ts-meta">
              <span>📄 js-fundamentals.pdf</span>
              <span>📅 Submitted: 07 Oct 2024</span>
            </div>
          </div>

          <div className="ts-right">
            <span className="ts-badge graded">Graded</span>

            <div className="ts-actions">
              <button className="outline">View PDF</button>
              <button className="success">View Grade</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrainerSubmissions;
