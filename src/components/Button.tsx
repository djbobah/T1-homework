import styles from "./Button.module.scss";

interface IButton {
  title: string;
  styleName?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ title, styleName, onClick }: IButton) => {
  return (
    <button className={styles.btn + " " + styleName} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
