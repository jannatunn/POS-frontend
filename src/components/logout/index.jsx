import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logoutUser } from "../../app/api/auth";
import { userLogout } from "../../app/features/auth";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    logoutUser()
      .then(() => dispatch(userLogout()))
      .then(() => navigate("/"));
  }, [dispatch, navigate]);
  return (
    <div className="d-flex justify-content-center">
      <div className="text-center">
        <Spinner animation="grow" variant="danger" />
        <p className="text-muted">Loging out...</p>
      </div>
    </div>
  );
}
