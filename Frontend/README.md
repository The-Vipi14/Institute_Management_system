      src/
      │
      ├── assets/
      │   ├── icons/
      │   └── images/
      │
      ├── components/
      │   ├── common/
      │   │   ├── Button.jsx
      │   │   ├── Input.jsx
      │   │   ├── Card.jsx
      │   │   ├── Modal.jsx
      │   │   ├── Table.jsx
      │   │   ├── EmptyState.jsx
      │   │   └── Loader.jsx
      │   │
      │   ├── charts/
      │   │   ├── LineChart.jsx
      │   │   ├── BarChart.jsx
      │   │   └── DonutChart.jsx
      │   │
      │   ├── layout/
      │   │   ├── Sidebar.jsx
      │   │   ├── Topbar.jsx
      │   │   └── PageWrapper.jsx
      │   │
      │   └── auth/
      │       ├── RoleCard.jsx
      │       └── AuthHeader.jsx
      │
      ├── layouts/
      │   ├── PublicLayout.jsx
      │   ├── StudentLayout.jsx
      │   ├── TrainerLayout.jsx
      │   └── AdminLayout.jsx
      │
      ├── pages/
      │   ├── public/
      │   │   ├── Landing.jsx
      │   │   ├── RoleSelection.jsx
      │   │   ├── Login.jsx
      │   │   ├── StudentRegister.jsx
      │   │   └── TrainerRegister.jsx
      │   │
      │   ├── student/
      │   │   ├── Dashboard.jsx
      │   │   ├── Profile.jsx
      │   │   ├── Attendance.jsx
      │   │   ├── Quizzes.jsx
      │   │   ├── Assignments.jsx
      │   │   ├── Performance.jsx
      │   │   └── Notifications.jsx
      │   │
      │   ├── trainer/
      │   │   ├── Dashboard.jsx
      │   │   ├── Profile.jsx
      │   │   ├── Students.jsx
      │   │   ├── Attendance.jsx
      │   │   ├── Quizzes.jsx
      │   │   ├── Assignments.jsx
      │   │   ├── Content.jsx
      │   │   └── Reports.jsx
      │   │
      │   └── admin/
      │       ├── Dashboard.jsx
      │       ├── Courses.jsx
      │       ├── Trainers.jsx
      │       ├── Students.jsx
      │       ├── Attendance.jsx
      │       ├── Quizzes.jsx
      │       ├── Assignments.jsx
      │       ├── Reports.jsx
      │       └── Settings.jsx
      │
      ├── context/
      │   ├── AuthContext.jsx
      │   ├── UserContext.jsx
      │   ├── CourseContext.jsx
      │   └── DataContext.jsx
      │
      ├── routes/
      │   ├── AppRoutes.jsx
      │   ├── ProtectedRoute.jsx
      │   └── RoleRoute.jsx
      │
      ├── data/
      │   ├── users.js
      │   ├── courses.js
      │   ├── students.js
      │   ├── trainers.js
      │   ├── attendance.js
      │   ├── quizzes.js
      │   └── assignments.js
      │
      ├── styles/
      │   ├── global.css
      │   ├── auth.css
      │   ├── landing.css
      │   ├── sidebar.css
      │   ├── dashboard.css
      │   ├── tables.css
      │   └── forms.css
      │
      ├── utils/
      │   ├── constants.js
      │   ├── helpers.js
      │   └── storage.js
      │
      ├── App.jsx
      ├── main.jsx
      └── index.css


# 🎓 Institute Management System (Frontend)

A modern, role-based **Institute Management System frontend** built with **React.js (JSX)** and **pure CSS**.  
This project focuses on **real-world academic workflows**, clean UI, and scalability — without using any external UI libraries.

This is a **frontend-only application** using mock data, designed to be easily connected to a backend later.

---

## 🚀 Tech Stack

- React.js (18.x)
- React Router DOM (v6)
- Recharts (for charts & analytics)
- CSS (custom styling, no UI frameworks)
- Vite (development & build tool)

❌ No backend  
❌ No UI libraries (MUI, Bootstrap, AntD)  
✅ Production-ready UI  
✅ Backend-ready architecture  

---

## 🎭 User Roles

### 👨‍🎓 Student Panel
Students can:
- View dashboard with analytics
- Track attendance
- View quizzes
- View assignments uploaded by trainer
- Download assignment PDFs
- Upload assignment solution PDFs
- Track performance with charts
- Receive notifications (read / unread)
- View profile

### 👨‍🏫 Trainer Panel (In Progress)
Trainers will be able to:
- Upload assignments (PDF)
- Manage quizzes
- Take attendance
- View student submissions
- Monitor student performance

### 👨‍💼 Admin Panel (Planned)
Admins will be able to:
- Manage courses, trainers, students
- Monitor attendance, quizzes, assignments
- View analytics & reports
- Full system access

---

## 📁 Project Structure

src/
│
├── pages/
│   ├── student/
│   │   ├── Dashboard.jsx
│   │   ├── Attendance.jsx
│   │   ├── Quizzes.jsx
│   │   ├── Assignments.jsx
│   │   ├── Performance.jsx
│   │   ├── Notifications.jsx
│   │   └── Profile.jsx
│
├── layouts/
│   └── StudentLayout.jsx
│
├── components/
│   └── layout/
│       └── Sidebar.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── index.css
├── main.jsx
└── App.jsx

---

## 📊 Student Dashboard Features

- Attendance trend (Line chart)
- Quiz & assignment performance charts
- Course details
- Trainer information
- Assignment & quiz overview
- Upcoming deadlines
- Clean, professional dashboard layout

All charts are built using **Recharts** and are fully responsive.

---

## 📄 Assignments – Real World Flow

- Trainer uploads assignment PDF
- Student can:
  - View / download assignment file
  - Check description & due date
  - Upload solution PDF
- Assignment status updates:
  - Pending → Submitted

(Currently handled using mock data and frontend state)

---

## 🔔 Notifications System

- Assignment notifications
- Quiz notifications
- Read / Unread states
- Filters:
  - All
  - Assignments
  - Quizzes
- Mark as read functionality (frontend only)

---

## 🎨 UI / UX Principles

- Fixed sidebar, scrollable content area
- Clean spacing and typography
- Dashboard-style layout
- Responsive design (desktop & mobile)
- CSS variables for easy dark-theme support
- No clutter, no unnecessary animations

---

## ⚙️ Setup & Run

```bash
npm install
npm run dev
