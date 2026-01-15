import { Outlet } from "react-router-dom";
import "./AdminLayout.css";
import TrainerSidebar from "../../components/layout/AdminSidebar/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="trainer-layout">
      {/* Fixed Sidebar */}
      
      <TrainerSidebar />
      {/* Right side content */}
      <main className="trainer-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

