import React, { useEffect, useState } from "react";
import PaginatedItems from "../../components/paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getProducts,
  getTagsByCategory,
} from "../../app/api/product";
import Footer from "../../components/footer/Footer";
import Tag from "../../components/tag";
import { setCategory, setSearch, toggleTags } from "../../app/features/product";

export default function Shop() {
  const [categories, setCategories] = useState([]);
  const { status, category, search, tags } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const [tag, setTag] = useState([]);

  useEffect(() => {
    dispatch(getProducts({ category, search, tags }));
    getTagsByCategory(category).then(({ data }) => setTag(data));
    getCategories().then(({ data }) => setCategories(data));
  }, [category, dispatch, tags, search]);

  return (
    <>
      <div className="mx-16 mt-4">
        <div className="flex gap-5">
          <select
            onChange={(e) => dispatch(setCategory(e.target.value))}
            className="px-4 py-1 items-center outline-none rounded shadow-md font-base bg-transparent cursor-pointer border border-gray-400">
            <option value="">filter by kategori</option>
            {categories.map((category) => (
              <option
                key={category._id}
                value={category.name}
                onClick={() => console.log("tes")}>
                {category.name}
              </option>
            ))}
          </select>

          <form action="" className="w-full md:flex md:justify-end">
            <input
              type="text"
              placeholder="Pesan makanan..."
              onChange={(e) => dispatch(setSearch(e.target.value))}
              className="md:w-1/2 px-4 py-1 items-center outline-none rounded shadow-md  border border-gray-400"
            />
          </form>
        </div>
        <strong>Tags:</strong>
        <Tag items={tag} onClick={(tag) => dispatch(toggleTags(tag))} />
        {status === "loading" ? (
          <div className="flex justify-center items-center text-2xl">
            loading...
          </div>
        ) : (
          <PaginatedItems itemsPerPage={10} />
        )}
      </div>
      <Footer />
    </>
  );
}
