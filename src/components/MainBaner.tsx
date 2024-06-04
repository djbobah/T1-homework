import styles from "./MainBaner.module.scss";

import Button from "./Button";

const MainBaner = () => {
  return (
    <section className={styles.mainBaner}>
      <div className="container">
        <h1>Any products from famous brands with worldwide delivery </h1>
        <p>
          We sell smartphones, laptops, clothes, shoes and many other products
          at low prices
        </p>
        <Button title="Go to shopping" />
      </div>
    </section>
  );
};

export default MainBaner;
