import { Outlet, Route, Routes } from "react-router-dom";
import Profile from "../../components/profile";
import Tr from "../../components/table-row";
function Account() {
  return (
    <div className="my-6 m-auto w-9/12 shadow-md shadow-gray-400 rounded overflow-hidden">
      <h2 className="pl-4 py-2 uppercase font-bold bg-green-600">account</h2>
      <div className="flex p-2 gap-2">
        <div>
          <Tr label="profile" link="/account" />
          <Tr label="pemesanan" link="/account/pemesanan" />
          <Tr label="alamat" link="/account/alamat" />
          <Tr label="logout" link="/account/logout" />
        </div>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}

export default Account;
