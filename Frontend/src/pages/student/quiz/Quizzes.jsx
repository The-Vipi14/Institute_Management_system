import "./studentQuiz.css";

const Quizzes = () => {
  return (
    <div className="quiz-page">
      {/* Header */}
      <div className="quiz-header">
        <h1>Quizzes</h1>
        <p>View and attempt your course quizzes</p>
      </div>

      {/* Summary Cards */}
      <div className="quiz-cards">
        <div className="quiz-card">
          <h3>Total Quizzes</h3>
          <span>2</span>
        </div>

        <div className="quiz-card">
          <h3>Completed</h3>
          <span>0</span>
        </div>

        <div className="quiz-card">
          <h3>Average Score</h3>
          <span>0%</span>
        </div>
      </div>

      {/* Quiz List */}
      <div className="quiz-table-wrapper">
        <h2>Quiz List</h2>

        <table className="quiz-table">
          <thead>
            <tr>
              <th>Quiz Title</th>
              <th>Total Marks</th>
              <th>Status</th>
              <th>Score</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>HTML Basics</td>
              <td>20</td>
              <td className="status pending">Pending</td>
              <td>—</td>
              <td>
                <button className="quiz-btn disabled">Not Available</button>
              </td>
            </tr>

            <tr>
              <td>CSS Fundamentals</td>
              <td>20</td>
              <td className="status pending">Pending</td>
              <td>—</td>
              <td>
                <button className="quiz-btn disabled">Not Available</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Quizzes;
