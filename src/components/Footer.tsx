import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.footer + " container"}>
        <span className={styles.logo}>Goods4you</span>
        <ul>
          <li>
            <a href="">Catalog</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
