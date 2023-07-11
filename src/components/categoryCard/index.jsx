import React from "react";
import { config } from "../../config";

function CategoryCard({ item, onAddToCart }) {
  console.log(item);
  return (
    <div
      key={item.id}
      className="rounded-lg shadow-md shadow-green-600 border border-green-600">
      <div className="rounded-xl shadow-md overflow-hidden shadow-green-200">
        <img
          src={`${config.base_url}/images/category/${item.image_url}`}
          alt={item.description}
          className="p-4"
        />
        <div className="">
          <h5 className="mb-4 py-1 mx-4 text-center font-sofia text-xl truncate font-bold capitalize tracking-tight text-gray-900 bg-green-400">
            {item.name ?? "Product gagall"}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
