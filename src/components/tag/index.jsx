import React from "react";
import { useSelector } from "react-redux";

function Tag({ items, onClick }) {
  const { tags } = useSelector((state) => state.product);

  return (
    <div className="">
      {items.map((item) => {
        return (
          <span
            key={item._id}
            onClick={() => onClick(item.name)}
            className={`${
              tags.includes(item.name) ? "bg-yellow-200" : "bg-green-200"
            } font-medium my-3 text-xs px-1.5 py-[1px] rounded-full cursor-pointer  text-green-900 `}>
            {item.name}
          </span>
        );
      })}
    </div>
  );
}

export default Tag;
