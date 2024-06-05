import Card from "./Card";
import styles from "./CatalogSection.module.scss";

import Search from "./Search";
import goods from "../mock/goods.json";

const CatalogSection = () => {
  return (
    <section className="container">
      <h2>Catalog</h2>
      <Search />
      <section className={styles.cardList}>
        {goods.map((good) => (
          <Card {...good} key={good.id} />
        ))}
      </section>
    </section>
  );
};

export default CatalogSection;
