import { Routes, Route } from "react-router-dom";
import StudentLayout from "../layouts/StudentLayout/StudentLayout";

import Dashboard from "../pages/student/dashboard/StudentDashboard";
import Profile from "../pages/student/profile/StudentProfile";
import Attendance from "../pages/student/attendence/StudentSectionAttendene";
import Quizzes from "../pages/student/quiz/Quizzes";
import Assignments from "../pages/student/assignments/StudentAssignment";
import Performance from "../pages/student/studentPerformance/Performance";
import Notifications from "../pages/student/Notification/StudentNotification";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/student" element={<StudentLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="quizzes" element={<Quizzes />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="performance" element={<Performance />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
