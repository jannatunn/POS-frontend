import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../app/api/auth";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logoutUser());
    navigate("/");
  }, [dispatch, navigate]);
  return (
    <div>
      <p>ini adalah halaman logout </p>
    </div>
  );
}
