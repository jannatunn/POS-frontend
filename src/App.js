import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Cart from "./pages/cart";
import Login from "./components/login";
// import Profile from "./components/profile";
import Footer from "./components/footer/Footer";
import Account from "./pages/account";
import Pemesanan from "./components/pemesanan";
import Address from "./components/address";
import AddAddress from "./components/add addrress";
import Logout from "./components/logout";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="account/*" element={<Account />}>
            <Route path="alamat" element={<Address />} />
            <Route path="addaddress" element={<AddAddress />} />
            <Route path="pemesanan" element={<Pemesanan />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
