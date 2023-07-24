import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { config } from "../../config";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { categorySelector } from "../../app/features/category";
import { deleteCategory, getCategory } from "../../app/api/category";

function DaftarCategories() {
  const categories = useSelector(categorySelector.selectAll);
  const dispatch = useDispatch();

  const columns = [
    {
      name: "Gambar",
      selector: (row) => (
        <img
          src={`${config.base_url}/images/category/${row.image_url}`}
          alt={row.name}
          className="w-11"
        />
      ),
    },
    {
      name: "Category",
      selector: (row) => row.name,
    },
    {
      center: true,
      button: true,
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2">
          <Link
            to={`/management/updateCategory/${row._id}`}
            className="bg-blue-400 px-2 py-1 rounded text-white cursor-pointer">
            <FiEdit2 />
          </Link>
          <div
            onClick={() => dispatch(deleteCategory(row._id))}
            className="bg-red-400 px-2 py-1 rounded text-white cursor-pointer">
            <RiDeleteBin6Line />
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  return (
    <div className="mt-6">
      <Link
        to={`/management/addCategory`}
        className="px-4 py-2 text-gray-700 font-olden uppercase rounded bg-green-300">
        add category
      </Link>
      <DataTable columns={columns} data={categories} />
    </div>
  );
}

export default DaftarCategories;
