import styles from "./Card.module.scss";
import ButtonAction from "./ButtonAction";
import cartImage from "../assets/images/cart.svg";
import Counter from "./Counter";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../types/ProductTypes";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks";

// interface IGood {
//   id: number;
//   image: string;
//   count: number;
//   title: string;
//   price: number;
// }

const Card = ({ id, thumbnail, title, price }: IProduct) => {
  const [count, setCount] = useState(0);

  const cartProducts = useAppSelector((state) => state.cart.cart.products);
  useEffect(() => {
    cartProducts.map((product): void => {
      if (product.id === id) setCount(product.quantity);
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

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={thumbnail}
          alt={title + " image"}
          onClick={() => handleClickCard(id)}
        />
      </div>
      <div className={styles.description}>
        <div className={styles.text} onClick={() => handleClickCard(id)}>
          <p className={styles.title}>{CorpTitle(title, count)}</p>
          <p className={styles.price}>{price + " $"}</p>
        </div>
        {count > 0 ? (
          <Counter count={count} />
        ) : (
          <ButtonAction img={cartImage} type="add to cart" />
        )}
      </div>
    </article>
  );
};

export default Card;
