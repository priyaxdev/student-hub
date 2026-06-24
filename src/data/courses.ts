import {type Course } from "../Types/Course";

export const courses: Course[] = [
  {
    id: "java",
    title: "Java Programming",
    description: "Learn Java from basics to advanced concepts.",
    duration: 8,
    level: "beginner",
    icon: "coffee",
    topics: [
  "Introduction to Java",
  "Variables & Data Types",
  "Operators",
  "Control Flow",
  "OOP Concepts",
]
  },
  {
    id: "react",
    title: "React Programming",
    description: "Learn React from basics to advanced concepts.",
    duration: 2,
    level: "beginner",
    icon: "atom",
    topics: [
  "Introduction to React",
  "JSX & Components",
  "Props & State",
  "useEffect Hook",
  "React Router",
  "Custom Hooks",
]
  },
  {
    id: "dsa",
    title: "Data Structure And Algorithm",
    description: "Learn DSA for placement ready",
    duration: 20,
    level: "beginner",
    icon: "binary",
    topics: [
  "Arrays & Strings",
  "Linked Lists",
  "Stacks & Queues",
  "Trees & Graphs",
  "Sorting Algorithms",
  "Dynamic Programming",
]
  },
];