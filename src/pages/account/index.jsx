import { Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Order from "../../components/Order";

function Account() {
  return (
    <div className="flex justify-center h-[calc(90vh)]">
      <div className="w-11/12 my-6 flex gap-6">
        <Sidebar />
        <div className="content-left flex flex-col w-full overflow-y-scroll">
          <Routes>
            <Route path="/" element={<Order />} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Account;
