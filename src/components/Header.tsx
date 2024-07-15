import styles from "./Header.module.scss";
import cart from "../assets/images/cart.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

interface IHeader {
  auth: boolean;
}

const Header: React.FC<IHeader> = ({ auth }) => {
  const location = useLocation();
  const countProducts = useAppSelector(
    (state) => state.cart.cart.totalQuantity
  );

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

        {auth ? (
          <nav>
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
                      {countProducts
                        ? countProducts > 0 && (
                            <span className={styles.bage}>{countProducts}</span>
                          )
                        : ""}
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
