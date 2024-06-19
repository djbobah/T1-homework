import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useAuthQuery } from "../services/dummyjsonApi";

const ProtectedRoutes = () => {
  // const { data, isLoading, error } = useAuthQuery(localStorage.getItem("t1"));
  // console.log("dfgffdg", data);
  // const isAuth = true;
  const isAuth = localStorage.getItem("t1");
  console.log("isAuth", isAuth);
  return isAuth ? (
    <>
      <Outlet /> <Footer />{" "}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
