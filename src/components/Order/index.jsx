import React, { useEffect, useState } from "react";
import { getOrders } from "../../app/api/order";
import { formatRupiah, sumPrice } from "../../utils";
import { Link } from "react-router-dom";

export default function Order() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders().then(({ data: { data } }) => setOrders(data));
  }, []);

  return (
    <table className=" ">
      <thead
        className="bg-green-200
      ">
        <tr className="text-left">
          <th className="px-4 py-2 ">order id</th>
          <th className="px-4 py-2 ">total</th>
          <th className="px-4 py-2 ">status</th>
          <th className="px-4 py-2 ">invoice</th>
        </tr>
      </thead>
      <tbody className="">
        {orders.map((order, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""}>
            <td className="px-4 py-2 text-top">#{order.order_number}</td>
            <td className="px-4 py-2">
              {formatRupiah(sumPrice(order.order_items))}
            </td>
            <td className="px-4 py-2 text-left">#{order.status}</td>
            <td className="px-4 py-2">
              <Link
                to={`/invoices/${order._id}`}
                className="text-gray-50 font-medium px-4 py-1 rounded bg-blue-400">
                Invoices
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
