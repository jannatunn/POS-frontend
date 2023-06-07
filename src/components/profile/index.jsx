import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../../app/api/auth";

function Profile() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuth());
    console.log("get auth in header");
  }, [dispatch]);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-16 mt-5">
      <h1 className="px-6 py-3 uppercase font-semibold bg-green-600">
        Account
      </h1>
      <div className="m-3 gap-2 grid grid-cols-[35%_65%]">
        <ul className="divide-y capitalize tracking-wide font-normal divide-gray-300 border border-gray-300">
          <li className="py-1 px-3">
            <p>Profile</p>
          </li>
          <li className="py-1 px-3">
            <p>Pemesanan</p>
          </li>
          <li className="py-1 px-3">
            <p>alamat</p>
          </li>
          <li className="py-1 px-3">
            <p>Logout</p>
          </li>
        </ul>
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
                <td className="px-6 py-4">{auth.user.full_name}</td>
                <td className="px-6 py-4">{auth.user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
