import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { categorySelector } from "../../app/features/category";
import { updateCategory } from "../../app/api/category";

function FormUpdateCategory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    image: null,
  });
  const category = useSelector((state) =>
    categorySelector.selectById(state, id)
  );

  console.log(formData);

  const handleInputChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      console.log(e.target.value);
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
      dispatch(updateCategory({ formData, id }));
      navigate("/management/category");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (category) {
      setFormData({ ...formData, name: category.name });
    }
  }, [category, formData, formData.name]);

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
            value={formData.name}
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
          Update
        </button>
      </form>
    </div>
  );
}

export default FormUpdateCategory;
