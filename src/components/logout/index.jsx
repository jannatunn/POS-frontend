import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../app/api/auth";

export default function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutUser());
    window.location.replace("/");
  }, [dispatch]);
  return (
    <div>
      <p>ini adalah halaman logout </p>
    </div>
  );
}