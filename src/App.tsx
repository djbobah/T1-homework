import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import OneProduct from "./pages/OneProduct";
import NotFound from "./pages/NotFound";
// import Footer from "./components/Footer";
import { useAuthQuery, useGetUserCartQuery } from "./services/dummyjsonApi";
import { initCart } from "./store/cartSlice";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./hooks";
import Loader from "./utils/Loader";
import Login from "./components/Login/Login";
import ProtectedRoutes from "./components/protectedRoutes";
import { isTokenExpired } from "./utils/functions";

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Authentication logic
  const {
    data: userData,
    isLoading: isLoadingUser,
    error: errorUser,
  } = useAuthQuery(localStorage.getItem("t1"));
  useEffect(() => {
    if (errorUser) {
      // console.log("!!!!!!!!!!!11 user error");
      localStorage.removeItem("t1");
      setIsAuthenticated(false);
      navigate("/login");
    } else if (userData) {
      setIsAuthenticated(true);
    }

    if (isTokenExpired(localStorage.getItem("t1")!)) {
      console.log("TokenExpired");
      localStorage.removeItem("t1");
      // navigate("/login");
    }
  }, [userData, errorUser, navigate]);

  // Cart logic
  const {
    data: dataCart,
    error: errorCart,
    isLoading: isLoadingCart,
  } = useGetUserCartQuery(userData?.id);
  useEffect(() => {
    if (dataCart && !errorCart) {
      dispatch(initCart(dataCart));
    }
  }, [dataCart, errorCart, dispatch]);

  // Loading states
  if (isLoadingUser || isLoadingCart) {
    return (
      <>
        <Loader />
        <p className="container">LOADING...</p>
      </>
    );
  }

  // // Error handling
  // if (errorUser || errorCart) {
  //   // localStorage.removeItem("t1");
  //   // setIsAuthenticated(false);
  //   // navigate("/login");
  //   console.log(errorUser || errorCart);

  //   return <p className="container">Something went wrong.</p>;
  // }

  return (
    <>
      <Header auth={isAuthenticated} />

      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}>
          <Route path="/product/:id" element={<OneProduct />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* <Route path="*" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
