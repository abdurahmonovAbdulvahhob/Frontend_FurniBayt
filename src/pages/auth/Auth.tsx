import { RootState } from "@/redux";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const token = useSelector((state: RootState) => state.token.access_token);
  return token ? <Outlet /> : <Navigate replace to={"/auth/sign-in"} />;
};

export default React.memo(Auth);
