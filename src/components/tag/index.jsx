import React from "react";

function Tag({ items, onClick }) {
  return (
    <div className="">
      {items.map((item) => {
        return (
          <span
            key={item._id}
            onClick={() => onClick(item.name)}
            className="font-medium my-3 text-xs px-1.5 py-[1px] rounded-full cursor-pointer bg-green-200 text-green-900 ">
            {item.name}
          </span>
        );
      })}
    </div>
  );
}

export default Tag;
