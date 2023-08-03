import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categorySelector } from "../../app/features/category";
import { getCategory } from "../../app/api/category";
import { getProducts } from "../../app/api/product";

export default function Sidebar() {
  const categories = useSelector(categorySelector.selectAll);
  const { category } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [params, setParams] = useState({
    q: "",
    category,
  });

  useEffect(() => {
    dispatch(getProducts(params));
  }, [dispatch, params]);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const handleClick = (category) => {
    setParams({ ...params, category });
  };

  return (
    <div className=" py-4 " style={{ scrollbarWidth: "none" }}>
      <div className="space-y-2">
        <div className=" mb-6  uppercase font-bold text-green-700">
          <input
            type="text"
            placeholder="Search.."
            className=" w-full px-3 py-2 border shadow "
          />
        </div>
        {categories.map((val, index) => {
          return (
            <button
              key={index}
              onClick={() => handleClick(val.name)}
              className="whitespace-nowrap px-6 py-2 flex w-full text-gray-700 border font-medium rounded-xl hover:bg-green-400 cursor-pointer bg-green-300">
              {val.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
