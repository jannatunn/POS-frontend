import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useSelector } from "react-redux";
import { categorySelector } from "../../app/features/category";
import { useNavigate } from "react-router-dom";

function Side() {
  const { productItems } = useSelector((state) => state.product);
  const categories = useSelector(categorySelector.selectAll);
  const navigate = useNavigate();

  const menu = [
    {
      name: "Product",
      icon: <MdProductionQuantityLimits />,
      data: productItems,
    },
    {
      name: "Category",
      icon: <BiCategoryAlt />,
      data: categories,
    },
  ];
  const handleClick = (name) => {
    navigate(`${name}`);
  };

  return (
    <div
      className="h-[calc(90vh)] w-64 py-9 space-y-10"
      style={{ scrollbarWidth: "none" }}>
      <div className="space-y-2">
        <div className=" mb-3 uppercase text-center font-bold text-green-700">
          Add to
        </div>
        {menu.map((val, index) => {
          return (
            <button
              onClick={() => handleClick(val.name)}
              key={index}
              className="text-gray-700 py-3 px-6 w-full font-medium rounded flex items-center gap-4  bg-green-300 hover:bg-green-400 cursor-pointer">
              <div>{val.icon}</div>
              <div>{val.name}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Side;
