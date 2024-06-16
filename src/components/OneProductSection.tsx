import styles from "./OneProductSection.module.scss";

import Button from "./Button/Button";
import starImg from "../assets/images/Star 1.svg";
import { IProduct } from "../types/ProductTypes";
import { useState } from "react";
import { makeArrFromRange } from "../utils/functions";
interface IOneProductSection {
  data: IProduct;
}
const OneProductSection: React.FC<IOneProductSection> = ({ data }) => {
  const [currentMainImage, setCurrentMainImage] = useState(data.images[0]);

  const arrRating = makeArrFromRange(1, Math.round(data.rating));
  return (
    <section className={styles.container + " container"}>
      <h2 className={styles.title}>{`Product ${data.id}`}</h2>
      <div className={styles.wraper}>
        <section className={styles.imagesList}>
          <div className={styles.mainImg}>
            <img src={currentMainImage} alt="главная картинка" />
          </div>
          <ul className={styles.secondaryImgs}>
            {data.images.map((image: string) => (
              <li
                className={currentMainImage === image ? styles.active : ""}
                key={image}
                onClick={() => setCurrentMainImage(image)}
              >
                <img src={image} alt="дополнительная картинка" />
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.description}>
          <h1>{data.title}</h1>
          <ul>
            <li>
              Rating
              <span className={styles.rating}>
                {arrRating.map((item) => (
                  <img key={item} src={starImg} alt="картинка звезды" />
                ))}
              </span>
            </li>
            <li>
              Base price<span>{data.price}$</span>
            </li>
            <li>
              Discount percentage<span>{data.discountPercentage}%</span>
            </li>
            <li className={styles.price}>
              Discount price
              <span>
                {(
                  data.price -
                  (data.price * data.discountPercentage) / 100
                ).toFixed(2)}
                $
              </span>
            </li>
            <li className={styles.stock}>
              Stock<span>{data.stock}</span>
            </li>
            <li className={styles.brand}>
              Brand<span>{data.brand}</span>
            </li>
            <li>
              Category<span>{data.category}</span>
            </li>
            <li className={styles.desc}>
              Description
              <span> {data.description}</span>
            </li>
          </ul>
          <Button title="Add to cart" styleName={styles.btn} />
        </section>
        <section className={styles.subInfo}>
          SKU ID<span> {data.sku}</span>
        </section>
      </div>
    </section>
  );
};

export default OneProductSection;
