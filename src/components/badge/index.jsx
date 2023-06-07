import React from "react";
import { useSelector } from "react-redux";

function Badge() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="w-3.5 h-3.5 text-xs top-[-15%] right-[-10%] text-green-600 flex items-center justify-center font-extrabold absolute bg-white rounded-full">
      {totalQuantity}
    </div>
  );
}

export default Badge;
