import React from "react";
import { config } from "../../config";
import { formatRupiah } from "../../utils";
import { MdAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { addItem } from "../../app/features/cart";

export default function Shop({ onAddToCart }) {
  const { productItems } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center content-left overflow-y-auto ">
      <div className="mt-5 w-11/12 flex gap-6 ">
        <Sidebar />
        <div className=" content-left grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {productItems.length ? (
            productItems.map((item, i) => (
              <div
                key={i}
                className="md:min-w-fit lg:min-w-fit rounded-xl border border-green-500 shadow-md overflow-hidden shadow-green-200 bg-gray-100">
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
                    <p className="font-bold text-gray-700">
                      {formatRupiah(item.price)}
                    </p>
                    <button
                      onClick={() => dispatch(addItem(item))}
                      className="inline-flex items-center text-2xl font-medium text-center text-white bg-green-500 rounded-full hover:bg-green-800 focus:outline-none ">
                      <MdAdd />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="">data kosong </div>
          )}
        </div>
      </div>
    </div>
  );
}
