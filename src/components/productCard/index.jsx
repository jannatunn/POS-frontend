import React from "react";
import { config } from "../../config";
import { MdAdd } from "react-icons/md";
import { formatRupiah } from "../../utils";

function ProductCard({ item, onAddToCart }) {
  console.log(item.name);
  return (
    <div className="w-80 rounded-xl border border-green-500 shadow-md overflow-hidden shadow-green-200">
      <img
        src={`${config.base_url}/images/products/${item.image_url}`}
        alt={item.description}
        className="p-4"
      />
      <div className="p-6">
        <h5 className="mb-2 text-2xl  font-bold capitalize tracking-tight text-gray-900">
          {item.name}
        </h5>
        <div className="flex items-center justify-between">
          <p className="font-bold text-gray-700">{formatRupiah(item.price)}</p>
          <button
            onClick={() => onAddToCart()}
            className="inline-flex items-center text-2xl font-medium text-center text-white bg-green-500 rounded-full hover:bg-green-800 focus:outline-none ">
            <MdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
