import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { deleteAddresses, getAddresses } from "../../app/api/address";
import { useDispatch, useSelector } from "react-redux";
import { addressSelector } from "../../app/features/address";

export default function Address() {
  const address = useSelector(addressSelector.selectAll);
  const dispatch = useDispatch();

  const columns = [
    {
      name: "Nama",
      selector: (row) => row.nama,
    },
    {
      name: "detail",
      cell: (row) =>
        `${row.provinsi}, ${row.kabupaten}, ${row.kecamatan}, ${row.kelurahan}`,
    },
    {
      center: true,
      button: true,
      name: "action",
      cell: (row) => (
        <div className="flex gap-2">
          <Link
            to={`/account/updateaddress/${row._id}`}
            className="bg-blue-400 px-2 py-1 rounded text-white cursor-pointer">
            <FiEdit2 />
          </Link>
          <div
            onClick={() => dispatch(deleteAddresses(row._id))}
            className="bg-red-400 px-2 py-1 rounded text-white cursor-pointer">
            <RiDeleteBin6Line />
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);
  return (
    <div className="w-full">
      <Link
        to={"/account/addaddress"}
        className="px-3 py-1.5 text-sm font-medium capitalize rounded bg-red-400 ">
        tambah alamat
      </Link>
      <DataTable columns={columns} striped data={address} />
    </div>
  );
}
