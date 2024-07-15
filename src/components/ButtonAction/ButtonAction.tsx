import styles from "./ButtonAction.module.scss";

interface IButtonAction {
  img: string;
  type: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonAction = ({ img, type, onClick }: IButtonAction) => {
  return (
    <button
      aria-label={`Action ${type}`}
      className={styles.btn}
      onClick={onClick}
    >
      <img aria-hidden="true" src={img} alt="action button " />
    </button>
  );
};

export default ButtonAction;
