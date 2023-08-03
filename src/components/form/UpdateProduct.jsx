import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../app/api/product";
import { useNavigate, useParams } from "react-router-dom";
import { selectProductById } from "../../app/features/product";

function FormUpdateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = useSelector((state) => selectProductById(state, id));
  const [name, SetName] = useState();
  const [price, SetPrice] = useState();
  const [category, SetCategory] = useState();
  const [image, SetImage] = useState();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: 0,
    image: null,
  });
  console.log(image);

  const handleInputChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { category, image, price, name } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("category", category.name);
    formDataToSend.append("image", image);
    formDataToSend.append("price", price);

    try {
      dispatch(addProduct(formData));
      navigate("/management/product");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (product) {
      SetName(product.name);
      SetPrice(product.price);
      SetCategory(product.category.name);
      SetImage(product.image_url);
    }
  }, [product, SetName]);

  return (
    <div className="w-full h-min flex justify-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="my-6 p-6 shadow-md shadow-gray-400 rounded bg-gray-100">
        <div className="relative z-0 p-2 mb-6 space-x-3 group border bg-white">
          <label htmlFor="name" className="uppercase font-mono">
            name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            placeholder={name}
            className="border shadow w-min"
          />
        </div>
        <div className="relative z-0 p-2 mb-6 space-x-3 group border bg-white">
          <label htmlFor="price" className="uppercase font-mono">
            price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={handleInputChange}
            placeholder={price}
            className="border shadow"
          />
        </div>
        <div className="relative z-0 p-2 mb-6 space-x-3 group border bg-white">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleInputChange}
          />
        </div>
        <div className="relative z-0 p-2 mb-6 space-x-3 group border bg-white">
          <label htmlFor="category" className="uppercase font-mono">
            category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={handleInputChange}
            placeholder={category}
            className="border shadow"
          />
        </div>
        <button type="submit" className="px-3 py-1 shadow bg-green-400 rounded">
          Upload
        </button>
      </form>
    </div>
  );
}

export default FormUpdateProduct;
