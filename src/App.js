import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Account from "./pages/account";
import Pemesanan from "./components/pemesanan";
import Address from "./components/address";
import AddAddress from "./components/add addrress";
import Logout from "./components/logout";
import Checkout from "./pages/checkout";
import { Confirmation } from "./pages/checkout/Confirmation";
import Login from "./pages/login";
import { useEffect } from "react";
import { listen } from "./app/listener";
import Cart from "./pages/cart";
import Invoices from "./pages/Invoices";

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
          <Route path="invoices" element={<Invoices />} />

          <Route path="checkout/*" element={<Checkout />}>
            <Route path="confirm" element={<Confirmation />} />
            <Route path="invoices" element={<Invoices />} />
          </Route>
          <Route path="account/*" element={<Account />}>
            <Route path="alamat" element={<Address />} />
            <Route path="addaddress" element={<AddAddress />} />
            <Route path="pemesanan" element={<Pemesanan />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
