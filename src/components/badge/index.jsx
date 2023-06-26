import React from "react";
import { totalItemCart } from "../../utils";
import { useSelector } from "react-redux";

function Badge() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="w-3.5 h-3.5 text-xs p-2 top-[-15%] right-[-10%] text-green-600 flex items-center justify-center font-extrabold absolute bg-white rounded-full">
      {totalItemCart(cart)}
    </div>
  );
}

export default Badge;
