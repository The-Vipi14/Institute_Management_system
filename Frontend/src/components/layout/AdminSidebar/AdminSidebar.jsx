import React from "react";

const AdminSidebar = () => {
  return (
    <aside className="trainer-sidebar">
      {/* Top */}
      <div className="ts-top">
        <div className="ts-logo">👨‍🏫</div>
        <div>
          <h3>IMS</h3>
          <p>Admin Panel</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="ts-nav">
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
        <NavLink to="/admin/cources">Cources</NavLink>
        <NavLink to="/admin/trainers">Trainers</NavLink>
        <NavLink to="/admin/students">Students</NavLink>
        <NavLink to="/admin/attendance">Attendance</NavLink>
        <NavLink to="/admin/reports">Reports</NavLink>
      </nav>

      {/* Bottom */}
      <div className="ts-bottom">
        <div className="ts-user">
          <div className="avatar">A</div>
          <div>
            <strong>Admin</strong>
            <span>asp@gmail.com</span>
          </div>
        </div>

        <button className="logout-btn">Logout</button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
