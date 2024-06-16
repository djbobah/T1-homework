import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import OneProduct from "./pages/OneProduct";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { useGetUserCartQuery } from "./services/dummyjsonApi";
import { initCart } from "./store/cartSlice";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import Loader from "./utils/Loader";

function App() {
  //получаем корзину пользователя с id 11
  const { data, error, isLoading } = useGetUserCartQuery(15);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      dispatch(initCart(data));
    }
  }, [data]);
  if (isLoading)
    return (
      <>
        <Loader />
        <p>LOADING...</p>
      </>
    );

  if (error) return <p>Something went wrong.</p>;

  return (
    <>
      <Header />
      <Routes>
        <Route path="/product/:id" element={<OneProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
