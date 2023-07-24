import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categorySelector } from "../../app/features/category";
import { getCategory } from "../../app/api/category";
import { config } from "../../config";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../../app/features/product";

export default function CategoryCard() {
  const categories = useSelector(categorySelector.selectAll);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const handleClick = (e) => {
    dispatch(setCategory(e));
    navigate("/shop");
  };

  return (
    <div className="flex flex-col justify-center items-center my-4">
      <h1 className="my-4 uppercase text-xl text-center font-sofia">
        -- pilih category menu --
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {categories.map((category, i) => (
          <div
            key={i}
            className="w-80 p-4 space-y-4 rounded-xl border border-green-500 shadow-md overflow-hidden shadow-green-200">
            <img
              src={`${config.base_url}/images/category/${category.image_url}`}
              alt={category.description}
              // className="p-4"
            />
            <button
              onClick={() => handleClick(category.name)}
              className="w-full  py-1  text-center font-sofia text-xl truncate font-bold capitalize tracking-tight text-gray-900 bg-green-400">
              {category.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
