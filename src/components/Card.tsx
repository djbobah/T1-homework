import styles from "./Card.module.scss";
import ButtonAction from "./ButtonAction/ButtonAction";
import cartImage from "../assets/images/cart.svg";
import Counter from "./Counter/Counter";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../types/ProductTypes";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useAddToCartMutation } from "../services/dummyjsonApi";
import { initCart } from "../store/cartSlice";

interface IGood {
  good: IProduct;
}

const Card = ({ good }: IGood) => {
  const [counter, setCounter] = useState(0);

  const cartProducts = useAppSelector((state) => state.cart.cart.products);
  useEffect(() => {
    cartProducts.map((product): void => {
      if (product.id === good.id) setCounter(product.quantity);
    });
  }, [cartProducts]);

  const navigate = useNavigate();

  const CorpTitle = (title: string, count: number) => {
    if (count > 0 && title.length > 20) {
      return title.slice(0, 20) + "...";
    } else return title;
  };
  const handleClickCard = (id: number) => {
    navigate("/product/" + id);
  };

  const dispatch = useAppDispatch();

  const cart = useAppSelector((store) => store.cart.cart);

  // приводим продукты из зорзины к виду для отправки на api
  const products = cart.products.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity,
    };
  });

  useEffect(() => {
    const presentInCart = cart.products.find((item) => item.id === good.id);
    if (presentInCart) setCounter(presentInCart.quantity);
    else setCounter(0);
  }, [cart]);

  const [updateCart] = useAddToCartMutation(); //, { isLoading, error }
  const handleClickAddToCart = async () => {
    setCounter(1);
    products.push({
      id: good.id,
      quantity: 1,
    });
    try {
      const response = await updateCart({
        idCart: cart.id,
        credentials: localStorage.getItem("t1"),

        product: products,
      });

      dispatch(initCart(response.data));
    } catch (err) {
      console.error("Failed to update cart", err);
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={good.thumbnail}
          alt={good.title + " image"}
          onClick={() => handleClickCard(good.id)}
        />
      </div>
      <div className={styles.description}>
        <div className={styles.text} onClick={() => handleClickCard(good.id)}>
          <p className={styles.title}>{CorpTitle(good.title, counter)}</p>
          <p className={styles.price}>{good.price + " $"}</p>
        </div>
        {counter > 0 ? (
          <Counter data={good} />
        ) : (
          <ButtonAction
            img={cartImage}
            type="add to cart"
            onClick={handleClickAddToCart}
          />
        )}
      </div>
    </article>
  );
};

export default Card;
