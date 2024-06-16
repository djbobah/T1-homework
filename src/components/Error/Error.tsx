import styles from "./Error.module.scss";
import img from "../../assets/images/8-errores-evitar-marketing-online.png";

const Error = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={img} alt="Весёлая картинка" className={styles.error} />
        <p className={styles.error}>Oops! An error occurred on the server.</p>
        <p className={styles.funnyMessage}>
          It looks like the server needs coffee... or a vacation!
        </p>
        <p className={styles.error}>
          But seriously, try refreshing the page or logging in later...
        </p>
      </div>
    </>
  );
};

export default Error;
