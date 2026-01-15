import { useState } from "react";
import "./AdminReport.css";

const reports = [
  { id: 1, title: "Total Revenue", value: "₹4,20,000", type: "finance" },
  { id: 2, title: "Active Students", value: "132", type: "students" },
  { id: 3, title: "Inactive Students", value: "18", type: "students" },
  { id: 4, title: "Total Trainers", value: "6", type: "staff" },
  { id: 5, title: "Courses Running", value: "4", type: "courses" },
  { id: 6, title: "Certificates Issued", value: "58", type: "academic" },
];

const AdminReport = () => {
  const [filter, setFilter] = useState("all");

  const filteredReports =
    filter === "all" ? reports : reports.filter((r) => r.type === filter);

  return (
    <div className="admin-report-page">
      {/* Header */}
      <div className="ar-header">
        <div>
          <h1>Institute Reports</h1>
          <p>Overview of performance, finance, and academics</p>
        </div>
        <div className="ar-actions">
          <button className="secondary-btn">Export CSV</button>
          <button className="primary-btn">Download PDF</button>
        </div>
      </div>

      {/* Filters */}
      <div className="ar-filters">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Reports</option>
          <option value="finance">Finance</option>
          <option value="students">Students</option>
          <option value="staff">Staff</option>
          <option value="courses">Courses</option>
          <option value="academic">Academic</option>
        </select>

        <input type="date" />
        <input type="date" />
      </div>

      {/* Summary Cards */}
      <div className="ar-grid">
        {filteredReports.map((r) => (
          <div key={r.id} className="ar-card">
            <span className="ar-type">{r.type.toUpperCase()}</span>
            <h3>{r.title}</h3>
            <p className="ar-value">{r.value}</p>
          </div>
        ))}
      </div>

      {/* Detailed Tables */}
      <div className="ar-section">
        <h2>Detailed Reports</h2>

        <table className="ar-table">
          <thead>
            <tr>
              <th>Report</th>
              <th>Category</th>
              <th>Value</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((r) => (
              <tr key={r.id}>
                <td>{r.title}</td>
                <td>{r.type}</td>
                <td>{r.value}</td>
                <td>Today</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="ar-pagination">
          <button>{"<"}</button>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default AdminReport;
