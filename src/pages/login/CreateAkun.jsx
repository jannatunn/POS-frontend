import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "../../app/api/auth";
import { InputForm } from "../../components/input";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      role: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name wajib di isi.."),
      role: Yup.string().required("role wajib di isi.."),
      email: Yup.string()
        .email("invalid email address")
        .required("Email wajib di isi.."),
      password: Yup.string()
        .min(8, "minimal panjang password 8 karakter")
        .required("Password wajib di isi.."),
    }),
    onSubmit: async (formData) => {
      await register(formData);
    },
  });
  return (
    <div className="my-6 w-96 mx-auto  shadow-md shadow-gray-400 rounded overflow-hidden">
      <h2 className="py-2.5 text-center text-lg font-bold bg-green-600 uppercase ">
        Register
      </h2>
      <form onSubmit={formik.handleSubmit} className="mx-10">
        <InputForm
          label="name"
          type="text"
          placeholder="masukan name.."
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.touched.name ? (
          <div className="text-red-500 text-xs">{formik.errors.name}</div>
        ) : null}
        <InputForm
          label="role"
          type="text"
          placeholder="masukan role.."
          value={formik.values.role}
          onChange={formik.handleChange}
        />
        {formik.touched.role ? (
          <div className="text-red-500 text-xs">{formik.errors.role}</div>
        ) : null}
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
};

export default Register;
