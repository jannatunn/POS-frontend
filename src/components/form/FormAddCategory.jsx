import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../app/api/category";

function FormAddCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    image: null,
  });

  const handleInputChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { image, name } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("image", image);

    try {
      dispatch(addCategory(formData));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

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
            className="border shadow w-min"
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
        <button type="submit" className="px-3 py-1 shadow bg-green-400 rounded">
          Upload
        </button>
      </form>
    </div>
  );
}

export default FormAddCategory;
