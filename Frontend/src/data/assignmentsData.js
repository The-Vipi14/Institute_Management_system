// Shared mock data between Trainer & Student

export const assignmentsData = [
  {
    id: 1,
    title: "React Hooks Assignment",
    description: "Practice useState, useEffect, and useContext.",
    dueDate: "2024-10-05",
    courseCode: "FS101",
    teacherFile: "react-hooks.pdf",

    // student side
    submissions: [
      {
        studentId: "STU001",
        studentFile: "vipin-react-hooks.pdf",
        submittedAt: "2024-10-03",
      },
    ],
  },

  {
    id: 2,
    title: "JavaScript Fundamentals",
    description: "Explain closures, hoisting and promises.",
    dueDate: "2024-10-10",
    courseCode: "FS101",
    teacherFile: "js-fundamentals.pdf",
    submissions: [],
  },
];
