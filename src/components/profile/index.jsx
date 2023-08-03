import React from "react";
import { useSelector } from "react-redux";
import NAIM from "../../images/banser.jpg";
import { InputProfile } from "../input";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <div className="p-5 m-1 flex gap-5 min-h-[calc(79vh)] border bg-green-50">
      <img src={NAIM} alt="naim" className="w-52 h-52 rounded" />

      <form className="py-2  w-full">
        <InputProfile
          type={"text"}
          htmlFor={"name"}
          value={user.name}
          label={"Full name"}
        />
        <InputProfile type={"date"} htmlFor={"date"} label={"Tanggal lahir"} />

        <InputProfile
          type={"number"}
          htmlFor={"telpon"}
          // value={}
          label={"No Hp"}
        />
        <InputProfile
          type={"email"}
          htmlFor={"email"}
          value={user.email}
          label={"Email"}
        />
        <InputProfile
          type={"text"}
          htmlFor={"role"}
          value={user.role}
          label={"role"}
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Profile;
