import React, { useEffect, useState } from "react";
import { getOrders } from "../../app/api/order";
import { config } from "../../config";
import { formatRupiah } from "../../utils";
import { Link } from "react-router-dom";

export default function Order() {
  const [orders, setOrders] = useState([]);
  console.log("orders", orders);
  useEffect(() => {
    getOrders().then(({ data: { data } }) => setOrders(data));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {orders.map((order) => (
        <Link to={`/invoices/${order._id}`}>
          <div className="bg-gray-200 rounded-xl">
            <div className="px-5 py-2   border-b-2 border-gray-500 rounded-t-xl bg-gray-200">
              ID. PESANAN. {order.id}
            </div>
            {order.order_items.map((item) => (
              <div className="px-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={`${config.base_url}/images/products/${item.image}`}
                    alt={item.name}
                    className="w-20 my-2"
                  />
                  <div className="flex flex-col">
                    <div className="">{item.name}</div>
                    <span className="">x{item.qty}</span>
                  </div>
                </div>
                <div>{formatRupiah(item.price * item.qty)}</div>
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
