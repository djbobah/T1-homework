import Card from "./Card";
import styles from "./CatalogSection.module.scss";

import Search from "./Search";
import goods from "../mock/goods.json";
// import ButtonAction from "./ButtonAction";
import Button from "./Button";

const CatalogSection = () => {
  return (
    <section className="container" id="catalog">
      <h2 className={styles.title}>Catalog</h2>
      <Search styleName={styles.search} />
      <section className={styles.cardList}>
        {goods.map((good) => (
          <Card {...good} key={good.id} />
        ))}
      </section>
      <div className={styles.moreButton}>
        <Button title="Show more" />
      </div>
    </section>
  );
};

export default CatalogSection;
