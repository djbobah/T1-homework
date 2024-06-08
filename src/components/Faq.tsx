import styles from "./Faq.module.scss";
import Accordion from "./Accordeon";

const faqs = [
  {
    id: 1,
    question: "Question 1",
    answer: "Long answer to the first question",
  },
  {
    id: 2,
    question: "Question 2",
    answer: "Long answer2 to the first question",
  },
];

const Faq = () => {
  return (
    <section className={styles.wrapper} id="faq">
      <div className={styles.container}>
        <h2 className={styles.title}>FAQ</h2>
        {faqs.map((faq) => (
          // <div className={styles.row}>
          //   <h3 className={styles.question}>question</h3>
          //   <p className={styles.answer}>answer</p>
          //   <button className={styles.btn}>
          //       <img src={xImg} alt="action for accordion " />
          //     </button>
          // </div>
          <Accordion key={faq.id} title={faq.question} styleName={styles.row}>
            <p className={styles.accordionContent}>{faq.answer}</p>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Faq;