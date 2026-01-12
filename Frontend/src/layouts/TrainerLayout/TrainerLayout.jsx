import { Outlet } from "react-router-dom";
import "./TrainerLayout.css";
import TrainerSidebar from "../../components/layout/TrainerSidebar/TrainerSidebar";

const TrainerLayout = () => {
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

export default TrainerLayout;
