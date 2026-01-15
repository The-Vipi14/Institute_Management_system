import "./AdminTrainer.css";

const trainers = [
  {
    id: 1,
    name: "Amit Verma",
    subject: "MERN Stack",
    email: "amit@institute.com",
    phone: "+91 9876543210",
    batches: 3,
    status: "Active",
  },
  {
    id: 2,
    name: "Neha Sharma",
    subject: "UI/UX Design",
    email: "neha@institute.com",
    phone: "+91 9123456780",
    batches: 2,
    status: "Active",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    subject: "Python",
    email: "rahul@institute.com",
    phone: "+91 9988776655",
    batches: 1,
    status: "Inactive",
  },
];

const AdminTrainer = () => {
  return (
    <div className="admin-trainer-page">
      {/* Header */}
      <div className="at-header">
        <div>
          <h1>Trainers Management</h1>
          <p>Manage trainers, their batches and status</p>
        </div>
        <button className="primary-btn">+ Add Trainer</button>
      </div>

      {/* Search & Filters */}
      <div className="at-filters">
        <input type="text" placeholder="Search trainer..." />
        <select>
          <option>All Subjects</option>
          <option>MERN Stack</option>
          <option>UI/UX</option>
          <option>Python</option>
        </select>
        <select>
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Trainers List */}
      <div className="at-grid">
        {trainers.map((t) => (
          <div key={t.id} className="at-card">
            <div className="at-card-header">
              <h3>{t.name}</h3>
              <span className={`status ${t.status.toLowerCase()}`}>
                {t.status}
              </span>
            </div>

            <div className="at-info">
              <p><strong>Subject:</strong> {t.subject}</p>
              <p><strong>Email:</strong> {t.email}</p>
              <p><strong>Phone:</strong> {t.phone}</p>
              <p><strong>Batches:</strong> {t.batches}</p>
            </div>

            <div className="at-actions">
              <button className="view">View</button>
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTrainer;
