import { Routes, Route, Navigate } from "react-router-dom";

import StudentLayout from "../layouts/StudentLayout/StudentLayout";
import Dashboard from "../pages/student/dashboard/StudentDashboard";
import Profile from "../pages/student/profile/StudentProfile";
import Attendance from "../pages/student/attendence/StudentSectionAttendene";
import Quizzes from "../pages/student/quiz/Quizzes";
import Assignments from "../pages/student/assignments/StudentAssignment";
import Performance from "../pages/student/studentPerformance/Performance";
import Notifications from "../pages/student/Notification/StudentNotification";
import TrainerLayout from "../layouts/TrainerLayout/TrainerLayout";
import TrainerDashboard from "../pages/trainer/dashboard/TrainerDashboard";
import TrainerAssignments from '../pages/trainer/assignments/TrainerAssignments'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/student/dashboard" replace />} />
      <Route path="/student" element={<StudentLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="quizzes" element={<Quizzes />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="performance" element={<Performance />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>



     {/* TRAINER ROUTES */}
      <Route path="/trainer" element={<TrainerLayout/>}>
        <Route path="dashboard" element={<TrainerDashboard/>} />
        {/* <Route path="students" element={<TrainerPlaceholder />} /> */}
        {/* <Route path="attendance" element={<TrainerPlaceholder />} /> */}
        <Route path="assignments" element={<TrainerAssignments/>} />
        {/* <Route path="quizzes" element={<TrainerPlaceholder />} /> */}
        {/* <Route path="reports" element={<TrainerPlaceholder />} /> */}
      </Route>
    </Routes>
  );
}; 

export default AppRoutes;
