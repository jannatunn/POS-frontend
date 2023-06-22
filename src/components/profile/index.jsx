import React from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

function Profile() {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="border w-full p-5 m-1">
      <DataTable
        columns={[
          { selector: (row) => row.label },
          { selector: (row) => row.value },
        ]}
        data={[
          { label: "Nama", value: auth.user.full_name },
          { label: "Email", value: auth.user.email },
        ]}
      />
    </div>
  );
}

export default Profile;
