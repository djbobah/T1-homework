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
interface ICounter {
  // count: number;
  data: IProduct;
  stylesName?: string;
  big?: boolean;
  // onChange: (event: React.MouseEvent<HTMLButtonElement>) => string;
  // setChangeSide: (str: string) => void;
}

const Counter = ({
  // count,
  data,
  stylesName,
  big = false,
  // setChangeSide,
}: ICounter) => {
  const [counter, setCounter] = useState(1);
  const [disable, setDisable] = useState(false);

  const dispatch = useAppDispatch();

  const cart = useAppSelector((store) => store.cart.cart);

  const products = cart.products.map((item) => {
    // if(data.id===item.id){set}
    return {
      id: item.id,
      quantity: item.quantity,
    };
  });

  const [updateCart, { isLoading, error }] = useAddToCartMutation();

  useEffect(() => {
    const presentInCart = cart.products.find((item) => item.id === data.id);
    if (presentInCart) setCounter(presentInCart.quantity);
    // else setCounter(0);
  }, []);

  const handleChange = () => {
    console.log("в задании было сказано не менять вручную");
  };

  // const handleClickMinus = () => {
  //   if (counter > 0) setCounter((prev) => prev - 1);
  //   else setCounter(0);
  // };

  const handleCounterChange = async (side: string) => {
    let updatedProducts = null;
    if (side === "+") {
      setCounter((prev) => prev + 1);

      updatedProducts = products.map((item) => {
        if (item.id === data.id) {
          if (item.quantity === data.stock) {
            setDisable(true);
          } else {
            return { id: item.id, quantity: counter };
          }
        }
        return { ...item };
      });
    }
    if (side === "-") {
      setDisable(false);
      setCounter((prev) => prev - 1);

      updatedProducts = products.filter((item) => {
        if (item.id === data.id) {
          // Уменьшаем количество, если оно больше нуля
          if (item.quantity > 0) {
            item.quantity = counter - 1;
          }
          // Возвращаем true, чтобы сохранить элемент, если его количество не равно нулю
          return item.quantity !== 0;
        }
        // Возвращаем true, чтобы сохранить все остальные элементы
        return true;
      });
    }

    console.log("updatedProducts", updatedProducts);

    try {
      const response = await updateCart({
        idCart: cart.id,
        credentials: localStorage.getItem("t1"),

        product: updatedProducts,
      });

      console.log("Product added to cart", response);
      dispatch(initCart(response.data));
    } catch (err) {
      console.error("Failed to update cart", err);
    }
    // console.log(products);

    console.log(side, counter);
  };

  return (
    <div className={styles.counterWrapper + " " + stylesName}>
      <ButtonAction
        img={minusImg}
        // onClick={handleClickMinus}
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
        // onClick={() => setCounter((prev) => prev + 1)}
        onClick={() => handleCounterChange("+")}
        type="increment counter"
        big={big}
        disable={disable}
      />
    </div>
  );
};

export default Counter;
