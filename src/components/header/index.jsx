import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Badge from "../badge";

export default function Header() {
  const auth = useSelector((state) => state.auth);

  return (
    <header className="bg-green-500">
      <div className="px-12 py-3">
        <div className="flex items-center justify-between gap-2">
          <Link to={`/`}>
            <h1 className="font-bold text-xl flex flex-col items-center text-slate-900">
              <div className="italic uppercase">waroeng</div>
              <div className="font-dancing text-gray-100 mt-[-15px]">
                kenangan
              </div>
            </h1>
          </Link>

          <ul className="text-sm text-gray-700 font-belanosima font-medium cursor-pointer flex flex-wrap gap-2">
            <li className="font-roboto">home</li>
            <Link to={"shop"}>shop</Link>
            <li className="font-dancing text-xl">kenangan</li>
          </ul>

          <div className="flex text-2xl font-extrabold relative">
            <Link to={`cart`} className="relative">
              <MdOutlineShoppingCart />
              <Badge />
            </Link>
            <Link to={auth.user === null ? "/login" : "/account"} className="">
              <AiOutlineUser />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
