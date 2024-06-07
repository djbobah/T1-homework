import { ReactNode, useState } from "react";
import styles from "./Accordeon.module.scss";

interface IAccordion {
  title: string;
  children: ReactNode;
  styleName?: string;
}

const Accordion = ({ title, children, styleName }: IAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styleName}>
      <div
        className={styles.accordion + ` ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={styles.panel + ` ${isOpen ? styles.open : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
