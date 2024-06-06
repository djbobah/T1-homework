import styles from "./Search.module.scss";

import Button from "./Button";
interface ISerch {
  styleName: string;
}

const Search = ({ styleName }: ISerch) => {
  return (
    <>
      <div className={styles.wrapper + " " + styleName}>
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
