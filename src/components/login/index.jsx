import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { getCookie } from "../../tools/cookieHandller";
import { userLogin } from "../../tools/Login";

const Input = ({ label, type, value, onChange, placeholder }) => {
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
};

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("invalid email address")
        .required("Email wajib di isi.."),
      password: Yup.string()
        .min(8, "minimal panjang password 8 karakter")
        .required("Password wajib di isi.."),
    }),
    onSubmit: (data) => {
      console.log(data);
      userLogin(data);

      // dispatch(loginUser(data));
      // navigate("/");
      // console.log(data);
    },
  });

  useEffect(() => {
    let cookies = getCookie();
    if (cookies !== "") {
      window.location.replace("/");
    }
  });

  return (
    <div className="my-6 w-96 mx-auto  shadow-md shadow-gray-400 rounded overflow-hidden">
      <h2 className="py-2.5 text-center text-lg font-bold bg-green-600 uppercase ">
        Login
      </h2>
      <form onSubmit={formik.handleSubmit} className="mx-10">
        <Input
          label="email"
          type="email"
          placeholder="masukan email.."
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email ? (
          <div className="text-red-500 text-xs">{formik.errors.email}</div>
        ) : null}
        <Input
          label="password"
          type="password"
          placeholder="masukan password.."
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.touched.password ? (
          <div className="text-red-500 text-xs mb-4">
            {formik.errors.password}
          </div>
        ) : null}
        <button
          type="submit"
          className="text-gray-200 mb-4 px-2 py-0.5 bg-green-700 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
