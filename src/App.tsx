import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import OneProduct from "./pages/OneProduct";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import {
  useGetProductsQuery,
  useGetUserCartQuery,
} from "./services/dummyjsonApi";

function App() {
  //получаем корзину пользователя с id 11
  // const { data, error, isLoading } = useGetUserCartQuery(11);

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
