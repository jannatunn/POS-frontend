import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputAddress } from "../input/index";

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
          <InputAddress
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
          <InputAddress
            label="provinsi"
            htmlFor="provinsi"
            type="text"
            placeholder="pilih lokasi.."
            onChange={formik.handleChange}
            value={formik.values.provinsi}
          />
          {formik.touched.provinsi ? (
            <div className="text-red-500 text-sm">{formik.errors.provinsi}</div>
          ) : null}
          <InputAddress
            label="kabupaten"
            htmlFor="kabupaten"
            placeholder="pilih lokasi.."
            type="text"
            onChange={formik.handleChange}
            value={formik.values.kabupaten}
          />
          {formik.touched.kabupaten ? (
            <div className="text-red-500 text-sm">
              {formik.errors.kabupaten}
            </div>
          ) : null}
          <InputAddress
            label="kecamatan"
            placeholder="pilih lokasi.."
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
          <InputAddress
            label="kelurahan"
            type="text"
            placeholder="pilih lokasi.."
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
