import Card from "./Card";
import styles from "./CatalogSection.module.scss";

import Search from "./Search";
import goods from "../mock/goods.json";
import Button from "./Button";
import { useGetProductsQuery } from "../services/dummyjsonApi";

const CatalogSection = () => {
  const { data, error, isLoading } = useGetProductsQuery({
    query: "",
    limit: 9,
    skip: 0,
  });

  console.log(data);
  return (
    <section className="container" id="catalog">
      <h2 className={styles.title}>Catalog</h2>
      <Search styleName={styles.search} />
      <section className={styles.cardList}>
        {data?.map((good) => <Card {...good} key={good.id} />)}
      </section>
      <div className={styles.moreButton}>
        <Button title="Show more" />
      </div>
    </section>
  );
};

export default CatalogSection;
