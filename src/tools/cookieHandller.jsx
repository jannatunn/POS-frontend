import Cookies from "js-cookie";

const token = "token";

const createCookie = (data) => {
  Cookies.set(token, JSON.stringify(data), { expires: 1 });
};

const deleteCookie = () => {
  Cookies.remove(token);
};

const getCookie = () => {
  const data = Cookies.get(token);
  return data;
};

export { createCookie, deleteCookie, getCookie };
