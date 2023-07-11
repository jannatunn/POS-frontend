import React, { useEffect, useState } from "react";
import { addProduct, getCategories, getTags } from "../../app/api/product";
import { useDispatch } from "react-redux";

function Main() {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const data = { tags, category, name, description, price, image };

  console.log(image);

  useEffect(() => {
    getTags().then((data) => setTag(data));
    getCategories.apply().then((data) => setCategories(data));
  }, []);

  const handleUpdateImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      console.log(imageUrl); // URL gambar yang dihasilkan
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(addProduct(data));
  };
  return (
    <div className="w-full">
      <div className="my-6 m-auto w-9/12 shadow-md shadow-gray-400 rounded overflow-hidden">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="mx-6 my-4">
          <div className="relative z-0 mb-6 group">
            <input
              type="text"
              name="product_name"
              id="product_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder=" "
              required
            />
            <label
              htmlFor="product_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="description"
              id="description"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
            <label
              htmlFor="description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              description
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="price"
              id="price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={(e) => setPrice(e.target.value)}
              placeholder=" "
              value={price}
              required
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              price
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="file"
              name="gambar_url"
              id="gambar_url"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleUpdateImage}
              placeholder=" "
              required
            />
            <label
              htmlFor="gambar_url"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              gambar
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="categories"
                id="categories"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={(e) => setCategory(e.target.value)}
                placeholder=" "
                value={category}
                required
              />
              <label
                htmlFor="categories"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                category
              </label>
              <div className="mt-2 grid grid-cols-3 grid-flow-row">
                {categories.map((c, i) => {
                  return (
                    <div key={i} className="space-x-1">
                      <input type="checkbox" name="" id={c.name} />
                      <label htmlFor={c.name}>{c.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="tags"
                id="tags"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={(e) => setTags(e.target.value)}
                placeholder=" "
                value={tags}
                required
              />
              <label
                htmlFor="tags"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                tags
              </label>
              <div className="mt-2 grid grid-cols-3 grid-flow-row">
                {tag.map((t, i) => {
                  return (
                    <div key={i} className="space-x-1">
                      <input type="checkbox" name="" id={t.name} />
                      <label htmlFor={t.name}>{t.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Main;
