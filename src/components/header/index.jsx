import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategories } from "../../app/api/product";
import Badge from "../badge";
import { setCategory, setSearch } from "../../app/features/product";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    getCategories().then(({ data }) => setCategories(data));
  }, []);

  return (
    <header className="bg-green-500">
      <div className="px-12 py-3">
        <div className="flex items-center gap-2">
          <Link to={`/`}>
            <h1 className="font-bold text-xl flex flex-col items-center text-slate-900">
              <div className="italic uppercase ">waroeng</div>
              <div className="font-dancing text-gray-100 mt-[-15px] ">
                kenangan
              </div>
            </h1>
          </Link>
          <div className="pr-2">
            <select
              onChange={(e) => dispatch(setCategory(e.target.value))}
              className=" font-base bg-transparent outline-none cursor-pointer">
              <option value="">kategori</option>
              {categories.map((category) => (
                <option
                  key={category._id}
                  value={category.name}
                  onClick={() => console.log("tes")}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <form action="" className="w-full">
            <input
              type="text"
              placeholder="Pesan makanan..."
              onChange={(e) => dispatch(setSearch(e.target.value))}
              className="w-full text-white bg-green-700 px-4 py-2 items-center outline-none rounded shadow-md shadow-gray-800"
            />
          </form>
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
