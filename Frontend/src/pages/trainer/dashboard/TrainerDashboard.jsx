import "./TrainerDashboard.css";

const TrainerDashboard = () => {
  return (
    <div className="td-page">
      {/* Header */}
      <div className="td-header">
        <h1>Welcome back, Trainer 👋</h1>
        <p>Overview of your classes and students</p>
      </div>

      {/* Cards */}
      <div className="td-cards">
        <div className="td-card primary">
          <span>Total Students</span>
          <h2>42</h2>
          <small>Across all batches</small>
        </div>

        <div className="td-card">
          <span>Batches</span>
          <h2>3</h2>
          <small>Active batches</small>
        </div>

        <div className="td-card">
          <span>Assignments</span>
          <h2>5</h2>
          <small>Uploaded</small>
        </div>

        <div className="td-card">
          <span>Quizzes</span>
          <h2>4</h2>
          <small>Conducted</small>
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard;
