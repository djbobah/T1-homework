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
        height: "calc(100vh - 193px)",
      }}
    >
      <h2>{`Product ${id}`}</h2>
      <div className={styles.wraper}>
        <section className={styles.imagesList}>
          <div className={styles.mainImg}>
            <img src={mainImg} alt="главная картинка" />
          </div>
          <div className={styles.secondaryImgs}>
            <img
              className={styles.active}
              src={secondaryImg}
              alt="дополнительная картинка"
            />
            <img src={secondaryImg} alt="дополнительная картинка" />
            <img src={secondaryImg} alt="дополнительная картинка" />
            <img src={secondaryImg} alt="дополнительная картинка" />
            <img src={secondaryImg} alt="дополнительная картинка" />
            <img src={secondaryImg} alt="дополнительная картинка" />
          </div>
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
            <li>
              Discount price<span>450$</span>
            </li>
            <li>
              Stock<span>13</span>
            </li>
            <li>
              Brand<span>Puma</span>
            </li>
            <li>
              Category<span>Smartphones</span>
            </li>
            <li>
              Description
              <span> An apple mobile which is nothing like apple</span>
            </li>
          </ul>
          <Button title="Add to cart" />
        </section>
        <section className={styles.subInfo}>
          SKU ID<span>0005</span>
        </section>
      </div>
    </section>
  );
};

export default OneProductSection;
