import { Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Profile from "../../components/profile";

function Account() {
  return (
    <div className="flex justify-center">
      <div className="w-11/12 my-6 flex gap-6">
        <Sidebar />
        <div className="content-left flex flex-col w-full overflow-y-scroll">
          <Routes>
            <Route path="/" element={<Profile />} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Account;
