import styles from "./ButtonCounter.module.scss";

interface IButtonAction {
  img: string;
  type: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonCounter = ({ img, type, onClick }: IButtonAction) => {
  return (
    <button
      aria-label={`action ${type}`}
      className={styles.btn}
      onClick={onClick}
    >
      <img aria-hidden="true" src={img} alt="action button " />
    </button>
  );
};

export default ButtonCounter;
