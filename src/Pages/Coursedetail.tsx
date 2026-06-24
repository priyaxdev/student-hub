import { useParams, useNavigate } from "react-router";
import { courses } from "../data/courses";

const Coursedetail = () => {
  const { courseid } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === courseid);

  if (!course) return <h1 className="p-8 text-text-primary">Course not found!</h1>;

  return (
    <div className="p-6 bg-bg min-h-screen">

      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-text-secondary text-sm mb-6 hover:text-primary cursor-pointer"
      >
        ← Back to courses
      </button>

      <div className="bg-surface border border-border rounded-xl p-6 mb-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-primary text-2xl">
            ☕
          </div>
          <div>
            <h1 className="text-2xl font-bold text-text-primary">{course.title}</h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs px-3 py-1 rounded-full bg-success text-white font-medium">
                {course.level}
              </span>
              <span className="text-sm text-text-secondary">⏱ {course.duration} weeks</span>
            </div>
          </div>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed border-t border-border pt-4">
          {course.description}
        </p>

        <button className="mt-5 bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg text-sm font-medium">
          Start learning
        </button>
      </div>

      <div className="bg-surface border border-border rounded-xl p-6">
        <h2 className="text-base font-bold text-text-primary mb-4">Course content</h2>
        {course.topics.map((topic, index) => (
          <div key={index} className="flex items-center gap-3 py-3 border-b border-border last:border-none text-sm text-text-primary">
            <span className="w-6 h-6 rounded-full bg-[#EEF2FF] text-primary text-xs font-medium flex items-center justify-center flex-shrink-0">
              {index + 1}
            </span>
            {topic}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Coursedetail;