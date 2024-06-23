import plusImg from "../../assets/images/plus.svg";
import minusImg from "../../assets/images/minus.svg";
import { useEffect, useState } from "react";
import styles from "./Counter.module.scss";
// import ButtonCounter from "../../ButtonCounter";
import ButtonAction from "../ButtonAction/ButtonAction";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { initCart } from "../../store/cartSlice";
import { IProduct } from "../../types/ProductTypes";
import { useAddToCartMutation } from "../../services/dummyjsonApi";
import { isTokenExpired } from "../../utils/functions";
import { debounce } from "lodash";
interface ICounter {
  data: IProduct;
  stylesName?: string;
  big?: boolean;
}

const Counter = ({ data, stylesName, big = false }: ICounter) => {
  const [counter, setCounter] = useState(1);
  const [disable, setDisable] = useState(false);

  const dispatch = useAppDispatch();

  const cart = useAppSelector((store) => store.cart.cart);

  const products = cart.products.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity,
    };
  });

  const [updateCart] = useAddToCartMutation(); //, { isLoading, error }

  useEffect(() => {
    const presentInCart = cart.products.find((item) => item.id === data.id);
    if (presentInCart) {
      setCounter(presentInCart.quantity);
      if (presentInCart?.quantity >= data.stock) {
        setCounter(data.stock);
        setDisable(true);
      }
    }
  }, []);

  const handleChange = () => {
    console.log("в задании было сказано не менять вручную");
  };

  const handleCounterChange = debounce(async (side: string) => {
    if (isTokenExpired(localStorage.getItem("t1") || "")) {
      localStorage.removeItem("t1");
    }

    let updatedProducts = null;
    if (side === "+") {
      setCounter((prev) => prev + 1);

      updatedProducts = products.map((item) => {
        if (item.id === data.id) {
          if (item.quantity >= data.stock - 1) {
            setDisable(true);
            return { id: item.id, quantity: counter + 1 };
          } else return { id: item.id, quantity: counter + 1 };
        }
        return { ...item };
      });
    }
    if (side === "-") {
      setDisable(false);
      setCounter((prev) => prev - 1);

      updatedProducts = products.filter((item) => {
        if (item.id === data.id) {
          if (item.quantity >= 0) {
            item.quantity = counter - 1;
          }
          return item.quantity !== 0;
        }
        return true;
      });
    }

    try {
      const response = await updateCart({
        idCart: cart.id,
        credentials: localStorage.getItem("t1"),
        product: updatedProducts,
      });

      // console.log("Product added to cart", response);
      dispatch(initCart(response.data));
    } catch (err) {
      console.error("Failed to update cart", err);
    }
  }, 500);

  return (
    <div className={styles.counterWrapper + " " + stylesName}>
      <ButtonAction
        img={minusImg}
        onClick={() => handleCounterChange("-")}
        type="decrement counter"
        big={big}
      />
      <input
        type="text"
        value={counter}
        onChange={handleChange}
        className={
          big === true ? styles.count + " " + styles.big : styles.count
        }
      />
      <ButtonAction
        img={plusImg}
        onClick={() => handleCounterChange("+")}
        type="increment counter"
        big={big}
        disable={disable}
      />
    </div>
  );
};

export default Counter;
