// src/pages/student/Performance.jsx
import "./studentPerformance.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

/* MOCK DATA */
const progressData = [
  { week: "W1", score: 20 },
  { week: "W2", score: 40 },
  { week: "W3", score: 55 },
  { week: "W4", score: 70 },
  { week: "W5", score: 80 },
];

const scoreData = [
  { name: "Quizzes", value: 60 },
  { name: "Assignments", value: 40 },
];

const Performance = () => {
  return (
    <div className="sp-page">
      {/* Header */}
      <div className="sp-header">
        <h1>Performance</h1>
        <p>Track your academic progress over time</p>
      </div>

      {/* Top stats */}
      <div className="sp-cards">
        <div className="sp-card primary">
          <span>Overall Score</span>
          <h2>80%</h2>
        </div>

        <div className="sp-card">
          <span>Attendance</span>
          <h3>85%</h3>
        </div>

        <div className="sp-card">
          <span>Quiz Avg</span>
          <h3>60%</h3>
        </div>

        <div className="sp-card">
          <span>Assignment Avg</span>
          <h3>40%</h3>
        </div>
      </div>

      {/* Charts */}
      <div className="sp-grid">
        {/* Line chart */}
        <div className="sp-box wide">
          <h3>Overall Progress</h3>
          <div className="chart-box">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar chart */}
        <div className="sp-box">
          <h3>Score Distribution</h3>
          <div className="chart-box">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scoreData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#10b981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="sp-box">
        <h3>Performance Summary</h3>
        <p className="muted">
          You are performing consistently well. Focus on improving assignment
          submissions to increase your overall score.
        </p>
      </div>
    </div>
  );
};

export default Performance;
