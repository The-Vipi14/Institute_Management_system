// import Sidebar from "../../components/layout/StudentSidebar/StudentSidebar";
// import "./student-layout.css";

// const StudentLayout = ({ children }) => {
//   return (
//     <div className="student-layout">
//       <Sidebar />
//       <main className="student-main">
//         {children}
//       </main>
//     </div>
//   );
// };
 
// export default StudentLayout;

import StudentSidebar from "../../components/layout/StudentSidebar/StudentSidebar";
import "./student-layout.css";
import { Outlet } from "react-router-dom";

const StudentLayout = () => {
  return (
    <div className="student-layout">
      <StudentSidebar />
      <div className="student-content">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;
