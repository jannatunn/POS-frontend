import React from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { formatRupiah, sumPrice } from "../../utils";
import { useNavigate } from "react-router-dom";
import { config } from "../../config";
import { addItem, removeItem } from "../../app/features/cart";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlus = (item) => {
    dispatch(addItem(item));
  };

  const handleMinus = (item) => {
    dispatch(removeItem(item));
  };

  const columns = [
    {
      name: "Gambar",
      selector: (row) => (
        <img
          src={`${config.base_url}/images/products/${row.image_url}`}
          alt={row.name}
        />
      ),
    },
    {
      name: "Barang",
      selector: (row) => row.name,
    },
    {
      name: "Harga",
      selector: (row) => formatRupiah(row.price * row.qty),
    },
    {
      name: "Qty",
      cell: (row) => (
        <div>
          <button variant="primary" size="sm" onClick={() => handleMinus(row)}>
            -
          </button>
          <span className="mx-4">{row.qty}</span>
          <button variant="primary" size="sm" onClick={() => handlePlus(row)}>
            +
          </button>
        </div>
      ),
      center: true,
    },
  ];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-16 mt-5">
      <div className="">
        <div>
          <h1 className="px-6 py-3 uppercase font-semibold bg-green-600">
            keranjang belanja
          </h1>
        </div>
        <DataTable
          columns={columns}
          data={cart}
          striped
          title={`Sub Total: ${formatRupiah(sumPrice(cart))}`}
        />
        {cart.length > 0 && auth.user ? (
          <button
            onClick={() => navigate("/checkout")}
            className="w-full  py-1 my-2 text-white text-center bg-green-500">
            Checkout
          </button>
        ) : null}
      </div>
    </div>
  );
}
