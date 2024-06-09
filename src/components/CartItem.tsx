import styles from "./CartItem.module.scss";
import Counter from "./Counter";
import sneakersImg from "../assets/images/sneakers.png";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const navigate = useNavigate();
  const handleClickCard = (id: number) => {
    navigate("/product/" + id);
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.productInfo}>
        <img
          onClick={() => handleClickCard(1)}
          src={sneakersImg}
          alt="изображение товара"
        />
        <div onClick={() => handleClickCard(1)}>
          Essence Mascara Lash Princess <p>110 $</p>
        </div>
      </div>
      <Counter count={1} />
      <button>Delete</button>
    </section>
  );
};

export default CartItem;
