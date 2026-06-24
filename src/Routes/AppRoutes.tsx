import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
import Coursedetail from "../Pages/Coursedetail";
import Notes from "../Pages/Notes";
import Profile from "../Pages/Profile";
import Settings from "../Pages/Settings";
import Notfound from "../Pages/Notfound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:courseid" element={<Coursedetail />} />
          <Route path="notes" element={<Notes />} />
          <Route path="profile" element={<Profile />}>
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
