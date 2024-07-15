import styles from "./Header.module.scss";
import cart from "../assets/images/cart.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const goToAnchor = (path: string, anchor: string) => {
    navigate(path);
    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };
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
            <a onClick={() => goToAnchor("/", "#catalog")} href="#catalog">
              Catalog
            </a>
          </li>
          <li>
            <a onClick={() => goToAnchor("/", "#faq")} href="#faq">
              FAQ
            </a>
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
