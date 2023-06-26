import React, { useEffect, useState } from "react";
import PaginatedItems from "../../components/paginate";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getTagsByCategory } from "../../app/api/product";
import Footer from "../../components/footer/Footer";
import Tag from "../../components/tag";
import { toggleTags } from "../../app/features/product";

export default function Home() {
  const { status, category, search, tags } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const [tag, setTag] = useState([]);

  useEffect(() => {
    dispatch(getProducts({ category, search, tags }));
    getTagsByCategory(category).then(({ data }) => setTag(data));
  }, [category, dispatch, tags, search]);

  return (
    <>
      <div className="mx-16 mt-4">
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
