import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useAuthQuery } from "../services/dummyjsonApi";

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

const ProtectedRoutes = () => {
  const { data, isLoading, error } = useAuthQuery(localStorage.getItem("t1"));

  // if (isTokenExpired(localStorage.getItem("t1"))) {
  //   localStorage.removeItem("t1");
  //   // Выполнить перенаправление на страницу входа
  // }
  console.log("dfgffdg", data);
  console.log("error", error);

  // const isAuth = true;
  const isAuth = localStorage.getItem("t1");
  return isAuth ? (
    <>
      <Outlet /> <Footer />{" "}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
