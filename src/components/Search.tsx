import styles from "./Search.module.scss";

import Button from "./Button";
interface ISerch {
  styleName: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Search = ({ styleName, onChange, onClick }: ISerch) => {
  return (
    <>
      <div className={styles.wrapper + " " + styleName}>
        <div className="container">
          <input
            type="text"
            placeholder="Search by title"
            className={styles.input}
            onChange={onChange}
          />
          <Button
            title="Search"
            styleName={styles.cropButton}
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
};

export default Search;
