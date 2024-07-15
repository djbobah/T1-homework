import Card from "./Card";
import styles from "./CatalogSection.module.scss";

import Search from "./Search/Search";
import Button from "./Button/Button";
import { useGetProductsQuery } from "../services/dummyjsonApi";
import { useCallback, useState } from "react";
import { debounce } from "lodash";
import Loader from "../utils/Loader";
import Error from "./Error/Error";

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
    // console.log("asdsa");
    onSearch(searchQuery);
    // debouncedSearch();
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  function onSearch(query: string) {
    setQuery((prev) => ({ ...prev, query: query, limit: 9, skip: 0 }));
  }

  // Создаем "debounced" версию функции с задержкой в 500 мс
  const debouncedSearch = useCallback(debounce(onSearch, 1000), []);

  if (isLoading) {
    return (
      <>
        <Loader />
        <p className="container">LOADING...</p>
      </>
    );
  }
  if (error) {
    return <Error />;
  }

  return (
    <>
      <section className="container" id="catalog">
        {data && (
          <>
            <h2 className={styles.title}>Catalog</h2>
            <Search
              styleName={styles.search}
              onChange={handleSearchChange}
              onClick={handleSearchClick}
            />
            <section className={styles.cardList}>
              {data?.length === 0 ? (
                <p>
                  Unfortunately, nothing was found based on the results of your
                  query...
                </p>
              ) : (
                data?.map((good) => <Card {...good} key={good.id} />)
              )}
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
