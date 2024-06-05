import styles from "./Card.module.scss";
import img from "../assets/images/image.png";
import ButtonAction from "./ButtonAction";
import cartImage from "../assets/images/cart.svg";

interface IGood {
  id: number;
  image: string;
  count: number;
  title: string;
  price: number;
}

const Card = ({ id, image, count, title, price }: IGood) => {
  return (
    <article className={styles.card}>
      <div className={styles.imgBackground}>
        <img src={image} alt={title + " image"} />
      </div>
      <div className={styles.description}>
        <div className={styles.text}>
          <p className={styles.title}>{title}</p>
          <p className={styles.price}>{price + " $"}</p>
        </div>
        <ButtonAction img={cartImage} />
      </div>
    </article>
  );
};

export default Card;
