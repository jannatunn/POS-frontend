import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputForm } from "../input";
import { loginService } from "../../tools/authenticationHandler";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      // dispatch(loginUser(data));
      // console.log(data);
      // navigate("/");
      // window.location.replace("/");

      loginService(data)
        .then(() => {
          navigate("/");
          console.log(" data 1");
        })
        .then(() => {
          console.log(" data 2");

          // navigate back to form login and pop up error notification
        });
    },
  });

  // useEffect(() => {
  //   let cookies = getCookie();
  //   if (cookies !== "") {
  //     window.location.replace("/");
  //   }
  // });

  return (
    <div className="my-6 w-96 mx-auto  shadow-md shadow-gray-400 rounded overflow-hidden">
      <h2 className="py-2.5 text-center text-lg font-bold bg-green-600 uppercase ">
        Login
      </h2>
      <form onSubmit={formik.handleSubmit} className="mx-10">
        <InputForm
          label="email"
          type="email"
          placeholder="masukan email.."
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email ? (
          <div className="text-red-500 text-xs">{formik.errors.email}</div>
        ) : null}
        <InputForm
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
