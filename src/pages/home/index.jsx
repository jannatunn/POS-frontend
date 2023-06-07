import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/productCard";
// import Tag from "../../components/tag";
import { getProducts, getTagsByCategory } from "../../app/api/product";

export default function Home() {
  const { status, productItems, category } = useSelector(
    (state) => state.product
  );
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

  console.log("tags in home component ===>", tags);
  console.log("category in home component ===>", category);

  useEffect(() => {
    dispatch(getProducts());
    getTagsByCategory(category).then(({ data }) => setTags(data));
  }, [category, dispatch]);
  return (
    <div className="mx-16 mt-4">
      <strong>Tags:</strong>
      {/* <Tag items={tags} /> */}
      {status === "loading" ? (
        <div className="flex justify-center items-center text-2xl">
          loading...
        </div>
      ) : (
        <div className="container-md grid grid-cols-3 gap-4 items-end">
          {productItems.map((product, index) => {
            return <ProductCard item={product} key={index} />;
          })}
        </div>
      )}
    </div>
  );
}
