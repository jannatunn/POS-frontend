import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../config";

export const getAddresses = createAsyncThunk("address/getAddress", async () => {
  const { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  const res = await axios.get(`${config.base_url}/api/delivery-address`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res.data;
});

export const deleteAddresses = createAsyncThunk(
  "address/deleteAddress",
  async (id) => {
    const { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};

    await axios.delete(`${config.base_url}/api/delivery-address/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return id;
  }
);

export const addAddresses = createAsyncThunk(
  "address/addAddress",
  async (data) => {
    const { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};

    console.log("data ===>", data);

    const res = await axios.post(
      `${config.base_url}/api/delivery-addresses`,
      data,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

export const updateAddresses = createAsyncThunk(
  "address/updateAddress",
  async ({ data, id }) => {
    const { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};

    const res = await axios.patch(
      `${config.base_url}/api/delivery-address/${id}`,
      { data },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    console.log(id);
    console.log(res.data);

    return res.data;
  }
);
