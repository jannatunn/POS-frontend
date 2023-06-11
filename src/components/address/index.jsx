import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAddress } from "../../app/api/address";
import { addressSelector } from "../../app/features/address/reducers";

export default function Address() {
  const dispatch = useDispatch();
  const address = useSelector(addressSelector.selectAll);
  console.log(address);
  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);
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
