import React from "react";

function Tag({ items, onClick }) {
  return (
    <div className="">
      {items.map((item) => {
        return (
          <span
            key={item._id}
            onClick={() => onClick(item.name)}
            className="text-green-900 font-medium text-xs px-1.5 py-0.5 rounded-full cursor-pointer bg-green-200">
            {item.name}
          </span>
        );
      })}
    </div>
  );
}

export default Tag;
