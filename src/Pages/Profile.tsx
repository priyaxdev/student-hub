import { Outlet, Link, useLocation } from "react-router";
import { student } from "../data/student";

const Profile = () => {
  const location = useLocation();
  const isSettings = location.pathname.includes("settings");

  return (
    <div className="p-6 bg-bg min-h-screen">

      <div className="bg-surface border border-border rounded-xl p-6 mb-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center text-primary text-2xl font-bold">
            P
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary">{student.name}</h1>
            <p className="text-sm text-text-secondary">{student.course}</p>
            <p className="text-sm text-text-secondary">{student.university}</p>
          </div>
          <button className="ml-auto border border-border text-sm px-4 py-2 rounded-lg text-text-secondary hover:border-primary hover:text-primary">
            Edit profile
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 border-t border-border pt-4">
          <div>
            <p className="text-xs text-text-secondary">Semester</p>
            <p className="text-sm font-medium text-text-primary">{student.semester}</p>
          </div>
          <div>
            <p className="text-xs text-text-secondary">CGPA</p>
            <p className="text-sm font-medium text-text-primary">{student.cgpa}</p>
          </div>
          <div>
            <p className="text-xs text-text-secondary">Email</p>
            <p className="text-sm font-medium text-text-primary">{student.email}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <Link
          to="/profile"
          className={`text-sm px-4 py-2 rounded-lg border ${!isSettings ? "bg-primary text-white border-primary" : "border-border text-text-secondary hover:border-primary"}`}
        >
          My info
        </Link>
        <Link
          to="/profile/settings"
          className={`text-sm px-4 py-2 rounded-lg border ${isSettings ? "bg-primary text-white border-primary" : "border-border text-text-secondary hover:border-primary"}`}
        >
          Settings
        </Link>
      </div>

      <Outlet />

    </div>
  );
};

export default Profile;