import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { BsTagsFill } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";

function Side() {
  const menu = [
    {
      name: "Product",
      icon: <MdProductionQuantityLimits />,
    },
    {
      name: "Category",
      icon: <BiCategoryAlt />,
    },
    {
      name: "Tag",
      icon: <BsTagsFill />,
    },
  ];

  return (
    <div
      className="content-left h-screen border-r border-gray-500 w-64 py-9 space-y-10 overflow-y-scroll "
      style={{ scrollbarWidth: "none" }}>
      <div className="">
        <div className=" mb-3 uppercase text-center font-bold text-green-700">
          Add to
        </div>
        {menu.map((val, index) => {
          return (
            <div
              key={index}
              className="text-gray-700 flex items-center gap-4 border-b-2 py-3 px-6 font-medium hover:bg-green-400 cursor-pointer">
              <div>{val.icon}</div>
              <div>{val.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Side;
