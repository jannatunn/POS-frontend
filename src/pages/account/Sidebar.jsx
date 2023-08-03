import React from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import NAIM from "../../images/banser.jpg";

function Sidebar() {
  const datas = [
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
      {datas.length > 0 && (
        <Link
          to={datas[0].link}
          className="m-5 flex items-center gap-3 text-gray-700 font-normal w-full">
          <img src={NAIM} alt="contoh" className="w-7 h-7 rounded-full" />
          <div>
            <div className=""> jannatun naim</div>
            <div className="text-xs -mt-1 font-olden">email@gmail.com</div>
          </div>
        </Link>
      )}
      {datas.map(
        (data, i) =>
          data.name !== "profile" && (
            <Link
              key={i}
              to={data.link ? data.link : ""}
              className="text-gray-700 font-normal w-full flex items-center gap-2">
              <div>{data.icon}</div>
              <div>{data.name}</div>
            </Link>
          )
      )}
    </div>
  );
}
export default Sidebar;
