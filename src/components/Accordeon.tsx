import { useState } from "react";
import styles from "./Accordeon.module.scss";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className={styles.accordion} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      <div className={styles.panel + ` ${isOpen ? styles.open : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
