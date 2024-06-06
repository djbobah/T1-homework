import styles from "./ButtonCounter.module.scss";

interface IButtonAction {
  img: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonCounter = ({ img, onClick }: IButtonAction) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      <img src={img} alt="action button " />
    </button>
  );
};

export default ButtonCounter;
