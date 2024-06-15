import Card from "./Card";
import styles from "./CatalogSection.module.scss";

import Search from "./Search";
import Button from "./Button";
import { useGetProductsQuery } from "../services/dummyjsonApi";
import { useState } from "react";
import { debounce } from "lodash";

const CatalogSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryST, setQuery] = useState({
    query: "",
    limit: 9,
    skip: 0,
  });

  const { data, error, isLoading } = useGetProductsQuery(queryST);

  const handleClickShow = () => {
    setQuery((prev) => ({ ...prev, skip: prev.skip + 9 }));
  };

  function handleSearchClick() {
    onSearch(searchQuery);
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
    setSearchQuery(e.target.value);
  };

  function onSearch(query: string) {
    setQuery((prev) => ({ ...prev, query: query, limit: 9, skip: 0 }));
  }

  // Создаем "debounced" версию функции с задержкой в 500 мс
  const debouncedSearch = debounce(onSearch, 1000);

  console.log(data);
  console.log(error);
  return (
    <>
      <section className="container" id="catalog">
        {isLoading && <p>Идет загрузка данных...</p>}
        {error && <p>Что то пошло не так</p>}
        {data && (
          <>
            <h2 className={styles.title}>Catalog</h2>
            <Search
              styleName={styles.search}
              onChange={handleSearchChange}
              onClick={handleSearchClick}
            />
            <section className={styles.cardList}>
              {data?.map((good) => <Card {...good} key={good.id} />)}
            </section>
            <div className={styles.moreButton}>
              <Button title="Show more" onClick={handleClickShow} />
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default CatalogSection;
