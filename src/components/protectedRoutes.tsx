import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer";
import React from "react";

// function isTokenExpired(token) {
//   if (!token) {
//     return true;
//   }

//   const payloadBase64 = token.split(".")[1];
//   const decodedJson = Buffer.from(payloadBase64, "base64").toString();
//   const decoded = JSON.parse(decodedJson);
//   const exp = decoded.exp * 1000; // Преобразование в миллисекунды

//   const isExpired = Date.now() > exp;
//   return isExpired;
// }

const ProtectedRoutes: React.FC<{ isAuthenticated: boolean }> = ({
  isAuthenticated,
}) => {
  return isAuthenticated ? (
    <>
      <Outlet /> <Footer />{" "}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
