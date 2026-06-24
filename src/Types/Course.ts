export interface Course {
  id: string;
  title: string;
  description: string;
  duration: number;
  level: "beginner" | "intermediate" | "advanced";
  icon: string;
  topics:string[];
}