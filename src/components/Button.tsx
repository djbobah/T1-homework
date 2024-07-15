import styles from "./Button.module.scss";

interface IButton {
  title: string;
  styleName?: string;
}

const Button = ({ title, styleName }: IButton) => {
  return <button className={styles.btn + " " + styleName}>{title}</button>;
};

export default Button;
