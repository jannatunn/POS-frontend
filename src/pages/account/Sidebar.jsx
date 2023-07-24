import React from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";

function Sidebar() {
  const data = [
    {
      name: "profile",
      icon: <CiUser />,
      link: "/account",
    },
    {
      name: "pesanan",
      icon: <AiOutlineUnorderedList />,
      link: "/account/pemesanan",
    },
    {
      name: "alamat saya",
      icon: <FaRegAddressCard />,
      link: "/account/alamat",
    },
    {
      name: "management product",
      icon: <MdProductionQuantityLimits />,
      link: "/management/product",
    },
    {
      name: "logout",
      icon: <BiLogOutCircle />,
      link: "/account/logout",
    },
  ];
  return (
    <div className="w-72 space-y-2">
      {data.map((d, i) => (
        <Link
          key={i}
          to={d.link ? d.link : ""}
          className="text-gray-700 py-3 font-normal px-6 w-full rounded flex items-center bg-green-300 gap-2">
          <div>{d.icon}</div>
          <div> {d.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
