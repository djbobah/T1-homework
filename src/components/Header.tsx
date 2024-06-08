import styles from "./Header.module.scss";
import cart from "../assets/images/cart.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <header className={styles.header}>
      <div
        className={
          location.pathname === "/" ? styles.line + " container" : " container"
        }
      >
        <span className={styles.logo}>
          <Link to="/">Goods4you</Link>
        </span>

        <ul>
          <li>
            <a href="#catalog">Catalog</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <Link to="/cart">
              <div className={styles.cartWrapper}>
                <span>Cart</span>
                <div className={styles.cart}>
                  <img src={cart} alt="Cart image" />
                  <span className={styles.bage}>1</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
