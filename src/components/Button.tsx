import styles from "./Button.module.scss";

interface IButton {
  title: string;
}

const Button = ({ title }: IButton) => {
  return <button className={styles.btn}>{title}</button>;
};

export default Button;
