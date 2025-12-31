import "./landing.css";

const Landing = () => {
  return (
    <div className="landing">
      {/* ================= HEADER ================= */}
      <header className="landing-header">
        <div className="logo">
          <span className="logo-icon">🎓</span>
          <div>
            <h3>Institute MS</h3>
            <p>Management System</p>
          </div>
        </div>

        <div className="header-actions">
          <button className="btn-link">Sign In</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero">
        <span className="hero-badge">● Modern Education Management</span>

        <h1>
          Transform Your Institute <br />
          with <span>Smart Management</span>
        </h1>

        <p>
          A comprehensive platform for managing students, trainers, courses,
          attendance, assessments, and performance analytics — all in one place.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">Start Free Trial →</button>
          <button className="btn-outline">Login to Dashboard</button>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features">
        <h2>Everything You Need</h2>
        <p>
          Powerful features designed to streamline educational management and
          enhance learning outcomes.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <h4>Role-Based Access</h4>
            <p>
              Separate dashboards for students, trainers, and administrators
              with tailored features.
            </p>
          </div>

          <div className="feature-card">
            <h4>Course Management</h4>
            <p>
              Create, manage, and track courses with comprehensive tools for
              educators.
            </p>
          </div>

          <div className="feature-card">
            <h4>Analytics & Reports</h4>
            <p>
              Detailed performance tracking with visual charts and exportable
              reports.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BUILT FOR MODERN EDUCATION ================= */}
      <section className="features">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
          <div>
            <h2>Built for Modern Education</h2>
            <p>
              Our platform provides all the tools needed to manage your
              educational institution efficiently, from enrollment to
              graduation.
            </p>

            <ul style={{ marginTop: "20px", lineHeight: "2" }}>
              <li>✔ Real-time attendance tracking</li>
              <li>✔ Interactive quizzes and assessments</li>
              <li>✔ Assignment submission and grading</li>
              <li>✔ Performance analytics dashboard</li>
              <li>✔ Notification system</li>
              <li>✔ Mobile responsive design</li>
            </ul>
          </div>

          <div
            style={{
              background: "#f1f5f9",
              borderRadius: "16px",
              height: "260px",
            }}
          />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>
          Join thousands of institutions already using our platform to
          streamline their operations.
        </p>

        <button className="btn-outline" style={{ background: "#fff" }}>
          Create Your Account →
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        © 2024 Institute Management System. All rights reserved.
      </footer>
    </div>
  );
};

export default Landing;
