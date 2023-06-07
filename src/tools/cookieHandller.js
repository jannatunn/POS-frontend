import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const token = "token";

const createCookie = (data) => {
  const decoded = jwt_decode(data);
  Cookies.set(token, decoded, { expires: 1 });
};

const deleteCookie = () => {
  Cookies.remove(token);
};

const getCookie = () => {
  Cookies.get(token);
};


export { createCookie, deleteCookie, getCookie };
