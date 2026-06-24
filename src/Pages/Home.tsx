import { useNavigate } from "react-router";
import { student } from "../data/student";

const stats = [
  { label: "Courses enrolled", value: "3", bg: "bg-[#EEF2FF]", color: "text-primary", icon: "📚" },
  { label: "Notes uploaded", value: "12", bg: "bg-[#F0FDF4]", color: "text-success", icon: "📄" },
  { label: "Completed", value: "45%", bg: "bg-[#FEF3C7]", color: "text-warning", icon: "✅" },
  { label: "Hours learned", value: "24", bg: "bg-[#EDE9FE]", color: "text-secondary", icon: "⏱" },
];

const courseProgress = [
  { name: "Java Programming", progress: 70, icon: "☕" },
  { name: "React Development", progress: 40, icon: "⚛️" },
  { name: "Data Structures & Algorithms", progress: 25, icon: "🌳" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-bg min-h-screen">

      {/* Hero */}
      <div className="bg-surface border border-border rounded-2xl p-10 mb-4 flex items-center justify-between gap-8">
        <div className="flex-1">
          <p className="text-sm text-primary font-medium mb-3">Welcome back, {student.name} 👋</p>
          <h1 className="text-4xl font-bold text-text-primary leading-tight mb-4">
            Learn. Organize.<br />
            <span className="text-primary">Grow</span> Together.
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-sm">
            Explore courses, manage your notes, and track your learning progress all in one place.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/courses")}
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg text-sm font-medium"
            >
              Explore courses →
            </button>
            <button
              onClick={() => navigate("/notes")}
              className="border border-border text-text-primary px-5 py-2.5 rounded-lg text-sm hover:border-primary hover:text-primary"
            >
              View notes
            </button>
          </div>
        </div>
        <div className="w-40 h-40 rounded-full bg-[#EEF2FF] flex items-center justify-center text-7xl flex-shrink-0">
          🎓
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-surface border border-border rounded-xl p-5">
            <div className={`w-9 h-9 rounded-lg ${stat.bg} flex items-center justify-center text-lg mb-3`}>
              {stat.icon}
            </div>
            <p className="text-2xl font-bold text-text-primary mb-1">{stat.value}</p>
            <p className="text-xs text-text-secondary">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Course Progress */}
      <div className="bg-surface border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-text-primary">My courses</h2>
          <button onClick={() => navigate("/courses")} className="text-sm text-primary">See all →</button>
        </div>
        {courseProgress.map((course) => (
          <div key={course.name} className="flex items-center gap-3 py-3 border-b border-border last:border-none">
            <div className="w-9 h-9 rounded-lg bg-[#EEF2FF] flex items-center justify-center text-base flex-shrink-0">
              {course.icon}
            </div>
            <p className="text-sm text-text-primary flex-1">{course.name}</p>
            <div className="w-20 h-1 bg-border rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: `${course.progress}%` }} />
            </div>
            <p className="text-xs text-text-secondary w-8 text-right">{course.progress}%</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;