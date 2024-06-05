import styles from "./ButtonAction.module.scss";

interface IButtonAction {
  img: string;
}

const ButtonAction = ({ img }: IButtonAction) => {
  return (
    <button className={styles.btn}>
      {" "}
      <img src={img} alt="action button " />
    </button>
  );
};

export default ButtonAction;
