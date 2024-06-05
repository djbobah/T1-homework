import styles from "./Header.module.scss";
import cart from "../assets/images/cart.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.line + " container"}>
        <div className={styles.logo}>Goods4you</div>
        <ul>
          <li>
            <a href="">Catalog</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">
              <div className={styles.cartWrapper}>
                <span>Cart</span>
                <div className={styles.cart}>
                  <img src={cart} alt="Cart image" />
                  <span className={styles.bage}>1</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
