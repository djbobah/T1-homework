import styles from "./Card.module.scss";
import ButtonAction from "./ButtonAction";
import cartImage from "../assets/images/cart.svg";
import Counter from "./Counter";
import { useNavigate } from "react-router-dom";

interface IGood {
  id: number;
  image: string;
  count: number;
  title: string;
  price: number;
}

const Card = ({ id, image, count, title, price }: IGood) => {
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
      <img
        src={image}
        alt={title + " image"}
        onClick={() => handleClickCard(id)}
      />
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
