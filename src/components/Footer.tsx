import { Link, useNavigate } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
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
    <footer className={styles.wrapper}>
      <div className={styles.footer + " container"}>
        <span className={styles.logo}>
          {" "}
          <Link to="/">Goods4you </Link>
        </span>
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
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
