import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Account from "./pages/account";
import Address from "./components/address";
import Logout from "./components/logout";
import Checkout from "./pages/checkout";
import { Confirmation } from "./pages/checkout/Confirmation";
import Login from "./pages/login";
import { useEffect } from "react";
import { listen } from "./app/listener";
import Cart from "./pages/cart";
import Invoices from "./pages/Invoices";
import Order from "./components/Order";
import AddProduct from "./pages/add-product";
import UpdateAddress from "./components/update-addrress";
import AddAddress from "./components/add-address";

export default function App() {
  useEffect(() => {
    listen();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="invoices/:id" element={<Invoices />} />

          <Route path="checkout/*" element={<Checkout />}>
            <Route path="confirm" element={<Confirmation />} />
          </Route>
          <Route path="account/*" element={<Account />}>
            <Route path="alamat" element={<Address />} />
            <Route path="addaddress" element={<AddAddress />} />
            <Route path="updateaddress/:id" element={<UpdateAddress />} />
            <Route path="pemesanan" element={<Order />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
