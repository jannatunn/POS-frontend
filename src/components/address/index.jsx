import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAddress } from "../../app/api/address";

export default function Address() {
  const [address, setAddress] = useState([]);

  useEffect(() => {
    console.log("useeffect in address componen");
    getAddress().then(({ data: { data } }) => setAddress(data));
  }, []);
  return (
    <div className="w-full">
      <Link
        to={"/account/addaddress"}
        className="px-3 py-1.5 text-sm font-medium capitalize rounded bg-red-400 ">
        tambah alamat
      </Link>
      <DataTable
        columns={[
          {
            name: "Nama",
            selector: (row) => row.nama,
          },
          {
            name: "detail",
            cell: (row) =>
              `${row.provinsi}, ${row.kabupaten}, ${row.kecamatan}, ${row.kelurahan}`,
          },
        ]}
        data={address}
      />
    </div>
  );
}
