import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.footer + " container"}>
        <span className={styles.logo}>
          {" "}
          <Link to="/">Goods4you </Link>
        </span>

        <ul>
          <li>
            <a href="#catalog">Catalog</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
