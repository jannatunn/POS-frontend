import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="flex items-center">
      <table className="w-full h-min text-sm text-left text-gray-500 shadow">
        <thead className="text-xs text-gray-700 uppercase ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td className="px-6 py-4">{user.full_name}</td>
            <td className="px-6 py-4">{user.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Profile;
