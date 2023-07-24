import React from "react";
import Footer from "../../components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Shop from "../shop";
import CategoryCard from "../../components/categoryCard";

export default function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CategoryCard />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </>
  );
}
