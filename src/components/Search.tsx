import styles from "./Search.module.scss";

import Button from "./Button";

const Search = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="container">
          <input
            type="text"
            placeholder="Search by title"
            className={styles.input}
          />
          <Button title="Search" />
        </div>
      </div>
    </>
  );
};

export default Search;
