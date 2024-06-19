import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import OneProduct from "./pages/OneProduct";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { useAuthQuery, useGetUserCartQuery } from "./services/dummyjsonApi";
import { initCart } from "./store/cartSlice";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./hooks";
import Loader from "./utils/Loader";
import Login from "./components/Login/Login";
import ProtectedRoutes from "./components/protectedRoutes";

function App() {
  // const { data, isLoading, error } = useAuthQuery(localStorage.getItem("t1"));
  // console.log("dfgffdg", error);
  // const isAuth = true;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    console.log("app");
    const token = localStorage.getItem("t1");
    // Здесь должна быть проверка срока действия токена
    const authStatus = !!token;
    setIsAuthenticated(authStatus);
    if (!authStatus) {
      navigate("/login");
    }
  }, [navigate]);

  //получаем корзину пользователя с id 11
  // const { data, isLoading, error } = useAuthQuery(localStorage.getItem("t1"));
  // const { data, error, isLoading } = useGetUserCartQuery(15);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   if (data) {
  //     dispatch(initCart(data));
  //   }
  // }, [data]);
  // if (isLoading)
  //   return (
  //     <>
  //       <Loader />
  //       <p className="container">LOADING...</p>
  //     </>
  //   );

  // if (error) return <p>Something went wrong.</p>;

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route element={<ProtectedRoutes />}>
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
