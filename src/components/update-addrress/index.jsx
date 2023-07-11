import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addressSelector } from "../../app/features/address";
import { updateAddresses, getAddresses } from "../../app/api/address";

export default function UpdateAddress() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [detail, setDetail] = useState("");
  const data = { name, provinsi, kabupaten, kecamatan, kelurahan, detail, id };

  const address = useSelector((state) => addressSelector.selectById(state, id));

  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateAddresses({ data, id }));
    navigate("/account/alamat");
  };

  useEffect(() => {
    if (address) {
      setName(address.nama);
      setDetail(address.detail);
      setProvinsi(address.provinsi);
      setKelurahan(address.kelurahan);
      setKecamatan(address.kecamatan);
      setKabupaten(address.kabupaten);
    }
  }, [address]);
  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);
  return (
    <form onSubmit={handleUpdate}>
      <div className="grid grid-cols-2">
        <div className="">
          <div className="p-2">
            <label className="capitalize">nama</label>
            <div className="control">
              <input
                type="text"
                className="w-full text-gray-800 text-sm px-3 py-1.5 bg-green-200 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="m-2">
            <label htmlFor="detail">detail alamat</label>
            <textarea
              id="detail"
              cols="30"
              rows="10"
              onChange={(e) => setDetail(e.target.value)}
              value={detail}
              className="capitalize text-sm text-gray-800 p-3 bg-green-200 w-full outline-none"></textarea>
          </div>
        </div>

        <div className="">
          {" "}
          <div className="p-2">
            <label className="capitalize">Provinsi</label>
            <div className="control">
              <input
                type="text"
                className="w-full text-gray-800 text-sm px-3 py-1.5 bg-green-200 outline-none"
                value={provinsi}
                onChange={(e) => setProvinsi(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="p-2">
            <label className="capitalize">kabupaten</label>
            <div className="control">
              <input
                type="text"
                className="w-full text-gray-800 text-sm px-3 py-1.5 bg-green-200 outline-none"
                value={kabupaten}
                onChange={(e) => setKabupaten(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="p-2">
            <label className="capitalize">kecamatan</label>
            <div className="control">
              <input
                type="text"
                className="w-full text-gray-800 text-sm px-3 py-1.5 bg-green-200 outline-none"
                value={kecamatan}
                onChange={(e) => setKecamatan(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="p-2">
            <label className="capitalize">nama</label>
            <div className="control">
              <input
                type="text"
                className="w-full text-gray-800 text-sm px-3 py-1.5 bg-green-200 outline-none"
                value={kelurahan}
                onChange={(e) => setKelurahan(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="w-full font-medium py-1 px-3 bg-red-400">
        Submit
      </button>
    </form>
  );
}
