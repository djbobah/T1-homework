import styles from "./ButtonAction.module.scss";

interface IButtonAction {
  img: string;
  type: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  big?: boolean;
}

const ButtonAction = ({ img, type, onClick, big = false }: IButtonAction) => {
  return (
    <button
      aria-label={`Action ${type}`}
      className={big === true ? styles.btn + " " + styles.big : styles.btn}
      onClick={onClick}
    >
      <img aria-hidden="true" src={img} alt="action button " />
    </button>
  );
};

export default ButtonAction;
