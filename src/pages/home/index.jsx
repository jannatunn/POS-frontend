import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import { categorySelector } from "../../app/features/category";
import { getCategory } from "../../app/api/category";
import CategoryCard from "../../components/categoryCard";

export default function Home() {
  const categories = useSelector(categorySelector.selectAll);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col justify-center items-center my-4">
        <h1 className="my-4 uppercase text-xl text-center font-sofia">
          -- pilih menu --
        </h1>
        <div className="w-9/12 grid grid-cols-3 gap-4 ">
          {!categories ? (
            <div className="flex justify-center items-center text-2xl">
              data not found
            </div>
          ) : (
            categories.map((category, i) => (
              <CategoryCard key={i} item={category} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
