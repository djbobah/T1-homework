import { useParams } from "react-router-dom";
import styles from "./OneProductSection.module.scss";
import mainImg from "../assets/images/productXL.jpg";
import secondaryImg from "../assets/images/productSM.jpg";
import Button from "./Button";

const OneProductSection = () => {
  const { id } = useParams();
  return (
    <section
      className="container"
      style={{
        height: "calc(100vh - 288px)",
      }}
    >
      <h2 className={styles.title}>{`Product ${id}`}</h2>
      <div className={styles.wraper}>
        <section className={styles.imagesList}>
          <div className={styles.mainImg}>
            <img src={mainImg} alt="главная картинка" />
          </div>
          <ul className={styles.secondaryImgs}>
            <li>
              <img
                // className={styles.active}
                src={secondaryImg}
                alt="дополнительная картинка"
              />
            </li>
            <li>
              <img src={secondaryImg} alt="дополнительная картинка" />
            </li>
            <li>
              <img src={secondaryImg} alt="дополнительная картинка" />
            </li>
            <li>
              <img src={secondaryImg} alt="дополнительная картинка" />
            </li>
            <li>
              <img src={secondaryImg} alt="дополнительная картинка" />
            </li>
            <li>
              <img src={secondaryImg} alt="дополнительная картинка" />
            </li>
          </ul>

          {/* <img src={secondaryImg} alt="дополнительная картинка" />
            <img src={secondaryImg} alt="дополнительная картинка" />
            <img src={secondaryImg} alt="дополнительная картинка" />
            <img src={secondaryImg} alt="дополнительная картинка" />
            <img src={secondaryImg} alt="дополнительная картинка" /> */}
        </section>
        <section className={styles.description}>
          <h1>Puma Force 1 Shadow</h1>
          <ul>
            <li>
              Rating<span>dddd</span>
            </li>
            <li>
              Base price<span>500$</span>
            </li>
            <li>
              Discount percentage<span>10%</span>
            </li>
            <li className={styles.price}>
              Discount price<span>450$</span>
            </li>
            <li className={styles.stock}>
              Stock<span>13</span>
            </li>
            <li className={styles.brand}>
              Brand<span>Puma</span>
            </li>
            <li>
              Category<span>Smartphones</span>
            </li>
            <li className={styles.desc}>
              Description
              <span> An apple mobile which is nothing like apple</span>
            </li>
          </ul>
          <Button title="Add to cart" styleName={styles.btn} />
        </section>
        <section className={styles.subInfo}>
          SKU ID<span>0005</span>
        </section>
      </div>
    </section>
  );
};

export default OneProductSection;
