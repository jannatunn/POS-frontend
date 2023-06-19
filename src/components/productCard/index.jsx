import React from "react";
import { config } from "../../config";
import { MdAdd } from "react-icons/md";
import Tag from "../../components/tag";

function ProductCard({ item, onAddToCart }) {
  return (
    <div className="rounded-lg shadow-md shadow-green-600 border border-green-600">
      <div className="rounded-xl shadow-md overflow-hidden shadow-green-200">
        <img
          src={`${config.base_url}/images/products/${item.image_url}`}
          alt={item.description}
          className="h-32 w-full"
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl truncate font-bold capitalize tracking-tight text-gray-900">
            {item.name}
          </h5>
          <p>{item.category.name}</p>
          <Tag items={item.tags} />
          <div className="flex items-center justify-between">
            <p className="font-bold text-gray-700">Rp.{item.price}</p>
            <button
              onClick={() => onAddToCart()}
              className="inline-flex items-center text-2xl font-medium text-center text-white bg-green-500 rounded-full hover:bg-green-800 focus:outline-none ">
              <MdAdd />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
