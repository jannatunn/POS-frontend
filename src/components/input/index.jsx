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
      />
    </div>
  );
};

export { InputForm, InputAddress };
