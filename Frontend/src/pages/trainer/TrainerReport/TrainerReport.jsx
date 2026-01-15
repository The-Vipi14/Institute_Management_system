import "./TrainerReport.css";

const reports = [
  { id: 1, title: "Attendance Summary", period: "This Month", status: "Ready" },
  { id: 2, title: "Quiz Performance", period: "Last 30 Days", status: "Ready" },
  { id: 3, title: "Assignment Completion", period: "This Week", status: "Generating" },
];

const TrainerReport = () => {
  return (
    <div className="reports-page">
      <div className="reports-header">
        <div>
          <h1>Reports</h1>
          <p>View and download course reports</p>
        </div>
        <button className="btn-primary">Generate Report</button>
      </div>

      {/* Summary Cards */}
      <div className="report-stats">
        <div className="report-stat-card">
          <strong>3</strong>
          <span>Total Reports</span>
        </div>
        <div className="report-stat-card">
          <strong>2</strong>
          <span>Ready</span>
        </div>
        <div className="report-stat-card">
          <strong>1</strong>
          <span>Processing</span>
        </div>
      </div>

      {/* Reports Table */}
      <div className="report-list">
        <div className="report-row header">
          <span>Report Name</span>
          <span>Period</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        {reports.map((r) => (
          <div className="report-row" key={r.id}>
            <span>{r.title}</span>
            <span>{r.period}</span>
            <span className={`status ${r.status.toLowerCase()}`}>{r.status}</span>
            <button className="download-btn">
              {r.status === "Ready" ? "⬇ Download" : "⏳ Wait"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerReport;
