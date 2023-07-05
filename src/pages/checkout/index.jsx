import { Route, Routes, useNavigate } from "react-router-dom";
import AddressData from "./AddressData";
import { useState } from "react";
import { config } from "../../config";
import { createOrder } from "../../app/api/order";
import { useDispatch } from "react-redux";
import { Confirmation } from "./Confirmation";
import { clearItem } from "../../app/features/cart";

function Checkout() {
  const [selectedAddress, setSelectedAddress] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("selectedAddress ===>", selectedAddress);

  const handleCreateOrder = async () => {
    let payload = {
      delivery_address: selectedAddress._id,
      delivery_fee: config.global_ongkir,
    };

    const { data } = await createOrder(payload);
    if (!data.error) {
      dispatch(clearItem());
      navigate(`/invoices/${data._id}`);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-16 mt-5">
      <div>
        <h1 className="px-6 py-3 uppercase font-semibold bg-green-600">
          checkout
        </h1>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <AddressData
              setAddressData={(address) => setSelectedAddress(address)}
            />
          }
        />
        <Route
          path="/confirm"
          element={
            <Confirmation data={selectedAddress} onClick={handleCreateOrder} />
          }
        />
      </Routes>
    </div>
  );
}

export default Checkout;
