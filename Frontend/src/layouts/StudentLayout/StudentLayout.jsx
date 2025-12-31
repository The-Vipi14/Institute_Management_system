import Sidebar from "../../components/layout/StudentSidebar/StudentSidebar";
import "./student-layout.css";

const StudentLayout = ({ children }) => {
  return (
    <div className="student-layout">
      <Sidebar />
      <main className="student-main">
        {children}
      </main>
    </div>
  );
};

export default StudentLayout;
