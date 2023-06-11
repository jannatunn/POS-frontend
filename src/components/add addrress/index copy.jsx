import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Input = ({ label, htmlFor, type, placeholder, onChange }) => {
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

export default function AddAddress() {
  const formik = useFormik({
    initialValues: {
      nama: "",
      detail: "",
      provinsi: "",
      kabupaten: "",
      kecamatan: "",
      kelurahan: "",
    },
    validationSchema: Yup.object({
      nama: Yup.string().required("nama wajib diisi.."),
      detail: Yup.string().required("detail wajib diisi.."),
      provinsi: Yup.string().required("provinsi wajib diisi..").nullable(),
      kabupaten: Yup.string().required("kabupaten wajib diisi.."),
      kecamatan: Yup.string().required("kecamatan wajib diisi.."),
      kelurahan: Yup.string().required("kelurahann wajib diisi.."),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2">
        <div className="">
          <Input
            label="nama"
            htmlFor="nama"
            type="text"
            placeholder="Masukan nama alamat"
            onChange={formik.handleChange}
            value={formik.values.nama}
          />
          {formik.touched.nama ? (
            <div className="text-red-500 text-sm">{formik.errors.nama}</div>
          ) : null}
          <div className="m-2">
            <label htmlFor="detail">detail alamat</label>
            <textarea
              id="detail"
              cols="30"
              rows="10"
              onChange={formik.handleChange}
              value={formik.values.detail}
              placeholder="Masukan detail alamat"
              className="capitalize text-sm text-gray-800 p-3 bg-green-200 w-full outline-none"></textarea>
          </div>
          {formik.touched.detail ? (
            <div className="text-red-500 text-sm mb-3">
              {formik.errors.detail}
            </div>
          ) : null}
        </div>

        <div className="">
          <Input
            label="provinsi"
            htmlFor="provinsi"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.provinsi}
          />
          {formik.touched.provinsi ? (
            <div className="text-red-500 text-sm">{formik.errors.provinsi}</div>
          ) : null}
          <Input
            label="kabupaten"
            htmlFor="kabupaten"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.kabupaten}
          />
          {formik.touched.kabupaten ? (
            <div className="text-red-500 text-sm">
              {formik.errors.kabupaten}
            </div>
          ) : null}
          <Input
            label="kecamatan"
            type="text"
            htmlFor="kecamatan"
            onChange={formik.handleChange}
            value={formik.values.kecamatan}
          />
          {formik.touched.kecamatan ? (
            <div className="text-red-500 text-sm">
              {formik.errors.kecamatan}
            </div>
          ) : null}
          <Input
            label="kelurahan"
            type="text"
            htmlFor="kelurahan"
            onChange={formik.handleChange}
            value={formik.values.kelurahan}
          />
          {formik.touched.kelurahan ? (
            <div className="text-red-500 text-sm mb-3">
              {formik.errors.kelurahan}
            </div>
          ) : null}
        </div>
      </div>
      <button type="submit" className="w-full font-medium py-1 px-3 bg-red-400">
        Submit
      </button>
    </form>
  );
}
