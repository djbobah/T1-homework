import styles from "./ButtonAction.module.scss";

interface IButtonAction {
  img: string;
  type: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  big?: boolean;
  disable?: boolean;
}

const ButtonAction = ({
  img,
  type,
  onClick,
  big = false,
  disable = false,
}: IButtonAction) => {
  return (
    <button
      aria-label={`Action ${type}`}
      className={big === true ? styles.btn + " " + styles.big : styles.btn}
      onClick={onClick}
      disabled={disable}
    >
      <img aria-hidden="true" src={img} alt="action button " />
    </button>
  );
};

export default ButtonAction;
