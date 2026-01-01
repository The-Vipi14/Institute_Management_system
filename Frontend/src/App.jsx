// import React from "react";
// import Landing from "./pages/public/landingPage/Landing";
// import RoleSelection from "./pages/public/roleSelection/RoleSelection";
// import AdminLogin from "./pages/public/adminLogin/AdminLogin";
// import StudentRegister from "./pages/public/studentRegistration/StudentRegister";
// import TrainerRegister from "./pages/public/registerTrainer/TrainerRegister";
// import TrainerLogin from "./pages/public/trainerLogin/TrainerLogin";
// import StudentLogin from "./pages/public/studentLogin/StudentLogin";
// import StudentDashboard from "./pages/student/dashboard/StudentDashboard";
// import StudentLayout from "./layouts/StudentLayout/StudentLayout";

// const App = () => {
//   return (
//     <>
//       {/* <Landing/> */}
//       {/* <RoleSelection/> */}
//       {/* <AdminLogin/> */}
//       {/* <StudentRegister/> */}
//       {/* <TrainerRegister/> */}
//       {/* <TrainerLogin/> */}
//       {/* <StudentLogin/> */}
//       {/* <StudentDashboard/> */}
      
//       <StudentLayout>
//         <StudentDashboard />
//       </StudentLayout>
//     </>
//   );
// };

// export default App;


import AppRoutes from "./routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;
