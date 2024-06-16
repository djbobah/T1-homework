import CartItem from "./CartItem";
import styles from "./CartSection.module.scss";
import { useAppSelector } from "../hooks";

const CartSection = () => {
  const cart = useAppSelector((store) => store.cart.cart);
  return (
    <section className="container">
      <h1 className={styles.title}>My cart</h1>
      <div className={styles.wrapper}>
        <section className={styles.cart}>
          {cart.products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </section>
        <section className={styles.cash}>
          <p className={styles.count}>
            <span>Total count:</span> <span>{cart.totalProducts}</span>
          </p>
          <p className={styles.price}>
            <span>Total price:</span> <span> {cart.total}$ </span>
          </p>
          <p className={styles.total}>
            <span>Total price with discount:</span>
            <span> {cart.discountedTotal}$ </span>
          </p>
        </section>
      </div>
    </section>
  );
};

export default CartSection;
