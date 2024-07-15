import CartItem from "./CartItem";
import styles from "./CartSection.module.scss";

const CartSection = () => {
  return (
    <section className="container">
      <h1 className={styles.title}>My cart</h1>
      <div className={styles.wrapper}>
        <section className={styles.cart}>
          <CartItem />
          <CartItem />
          <CartItem />
        </section>
        <section className={styles.cash}>
          <p className={styles.count}>
            <span>Total count:</span> <span>3</span>
          </p>
          <p className={styles.price}>
            <span>Total price:</span> <span> 700$ </span>
          </p>
          <p className={styles.total}>
            <span>Total price with discount:</span> <span> 590$ </span>
          </p>
        </section>
      </div>
    </section>
  );
};

export default CartSection;
