import styles from "./CartItem.module.scss";
import Counter from "./Counter";
import sneakersImg from "../assets/images/sneakers.png";

const CartItem = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.productInfo}>
        <img src={sneakersImg} alt="изображение товара" />
        <div>
          Essence Mascara Lash Princess <p>110 $</p>
        </div>
      </div>
      <Counter count={1} />
      <button>Delete</button>
    </section>
  );
};

export default CartItem;
