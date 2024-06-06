import styles from "./ButtonAction.module.scss";

interface IButtonAction {
  img: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonAction = ({ img, onClick }: IButtonAction) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      <img src={img} alt="action button " />
    </button>
  );
};

export default ButtonAction;
