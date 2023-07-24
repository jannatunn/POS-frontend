import { Route, Routes } from "react-router-dom";
import Side from "./sidebar";
import DaftarProduct from "../../components/daftarItems/DaftarProduct";
import DaftarCategories from "../../components/daftarItems/DaftarCategories";
import FormProduct from "../../components/form/FormAddProduct";
import FormUpdateProduct from "../../components/form/FormUpdateProduct";

import FormUpdateCategory from "../../components/form/FormUpdateCategory";
import FormAddCategory from "../../components/form/FormAddCategory";

function AddProduct() {
  return (
    <div className="flex justify-center">
      <div className="w-10/12 flex gap-6">
        <Side />
        <div className="h-[calc(90vh)] content-left flex flex-col w-full overflow-y-scroll ">
          <Routes>
            <Route path="product" element={<DaftarProduct />} />
            <Route path="category" element={<DaftarCategories />} />
            <Route path="addProduct" element={<FormProduct />} />
            <Route path="updateProduct/:id" element={<FormUpdateProduct />} />
            <Route path="addCategory" element={<FormAddCategory />} />
            <Route path="updateCategory/:id" element={<FormUpdateCategory />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
