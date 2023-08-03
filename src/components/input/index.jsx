import React from "react";

function InputForm({ label, type, value, onChange, placeholder }) {
  return (
    <div className="my-3 w-full">
      <label htmlFor={label} className="text-base font-semibold capitalize">
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-3 py-2 w-full text-sm text-gray-900 outline-none bg-green-200"
      />
    </div>
  );
}

const InputAddress = ({ label, htmlFor, type, placeholder, onChange }) => {
  return (
    <div className="p-2 ">
      <label htmlFor={htmlFor} className="capitalize">
        {label}
      </label>
      <input
        type={type}
        id={htmlFor}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full text-gray-800 text-sm px-3 py-1.5 bg-green-200 outline-none"
        required
      />
    </div>
  );
};

const InputProfile = ({ label, htmlFor, type, value }) => {
  return (
    <div className=" relative z-0 w-full mb-6 group">
      <input
        type={type}
        id={htmlFor}
        value={value}
        className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-green-600 focus:outline-none focus:ring-0  peer"
        placeholder=" "
        required
      />
      <label
        htmlFor={htmlFor}
        className=" peer-focus:font-medium absolute text-sm text-green-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">
        {label}
      </label>
    </div>
  );
};

export { InputForm, InputAddress, InputProfile };
