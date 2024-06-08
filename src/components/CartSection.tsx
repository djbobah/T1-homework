import CartItem from "./CartItem";
import styles from "./CartSection.module.scss";

const CartSection = () => {
  return (
    <section className="container">
      <h1>My cart</h1>
      <div className={styles.wrapper}>
        <section className={styles.cart}>
          <CartItem />
          <CartItem />
          <CartItem />
        </section>
        <section className={styles.cash}>
          <p className={styles.count}>
            Total count: <span>3</span>
          </p>
          <p className={styles.price}>
            Total price: <span> 700$ </span>
          </p>
          <p className={styles.total}>
            Total price with discount: <span> 590$ </span>
          </p>
        </section>
      </div>
    </section>
  );
};

export default CartSection;
