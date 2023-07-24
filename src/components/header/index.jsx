import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Badge from "../badge";
import NAIM from "../../images/banser.jpg";

export default function Header() {
  const auth = useSelector((state) => state.auth);

  return (
    <header className="bg-green-500">
      <div className="px-12 py-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            {" "}
            <Link to={`/`}>
              <h1 className="font-bold text-xl flex flex-col items-center text-slate-900">
                <div className="italic uppercase ">waroeng</div>
                <div className="font-dancing text-gray-100 mt-[-15px] ">
                  kenangan
                </div>
              </h1>
            </Link>
          </div>

          <div className="text-2xl flex gap-3 font-extrabold relative">
            <Link to={`cart`} className="relative">
              <MdOutlineShoppingCart />
              <Badge />
            </Link>
            <Link
              to={auth.user === null ? "/login" : "/account/pemesanan"}
              className="">
              <img src={NAIM} alt="naim" className="w-6 h-6 rounded-full" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
