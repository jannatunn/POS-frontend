import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../app/api/product";
import { config } from "../../config";
import { formatRupiah } from "../../utils";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

function DaftarProduct({ items }) {
  const { productItems } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const columns = [
    {
      name: "Gambar",
      selector: (row) => (
        <img
          src={`${config.base_url}/images/products/${row.image_url}`}
          alt={row.name}
          className="w-11"
        />
      ),
    },
    {
      name: "product",
      selector: (row) => row.name,
    },
    {
      name: "Harga",
      selector: (row) => formatRupiah(row.price),
    },
    {
      center: true,
      button: true,
      name: "action",
      cell: (row) => (
        <div className="flex gap-2">
          <Link
            to={`/management/updateProduct/${row._id}`}
            className="bg-blue-400 px-2 py-1 rounded text-white cursor-pointer">
            <FiEdit2 />
          </Link>
          <div
            onClick={() => dispatch(deleteProduct(row._id))}
            className="bg-red-400 px-2 py-1 rounded text-white cursor-pointer">
            <RiDeleteBin6Line />
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="mt-6">
      <Link
        to={`/management/addProduct`}
        className="px-4 py-2 text-gray-700 font-olden uppercase rounded bg-green-300">
        add product
      </Link>
      <DataTable columns={columns} data={productItems} />
    </div>
  );
}

export default DaftarProduct;
