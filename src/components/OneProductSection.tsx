import styles from "./OneProductSection.module.scss";

import Button from "./Button/Button";
import starImg from "../assets/images/Star 1.svg";
import { IProduct } from "../types/ProductTypes";
import { useEffect, useState } from "react";
import { makeArrFromRange } from "../utils/functions";
import Counter from "./Counter/Counter";
import { useAddToCartMutation } from "../services/dummyjsonApi";
import { useAppDispatch, useAppSelector } from "../hooks";
import { initCart } from "../store/cartSlice";
interface IOneProductSection {
  data: IProduct;
}
const OneProductSection: React.FC<IOneProductSection> = ({ data }) => {
  const [currentMainImage, setCurrentMainImage] = useState(data.images[0]);
  // const [changeSide, setChangeSide] = useState("");
  const [counter, setCounter] = useState(0);
  const dispatch = useAppDispatch();

  const cart = useAppSelector((store) => store.cart.cart);

  // console.log("changeSide", changeSide);
  useEffect(() => {
    const presentInCart = cart.products.find((item) => item.id === data.id);
    if (presentInCart) setCounter(presentInCart.quantity);
  }, []);

  // приводим продукты из зорзины к виду для отправки на api
  const products = cart.products.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity,
    };
  });

  console.log("products", products);
  const [updateCart, { isLoading, error }] = useAddToCartMutation();

  const handleClickAddToCart = async () => {
    setCounter(1);
    products.push({
      id: data.id,
      quantity: 1,
    });
    try {
      const response = await updateCart({
        idCart: cart.id,
        credentials: localStorage.getItem("t1"),

        product: products,
      });

      console.log("Product added to cart", response);
      dispatch(initCart(response.data));
    } catch (err) {
      console.error("Failed to update cart", err);
    }
  };

  const handleCounterChange = async (side: string) => {
    if (side === "+") {
      setCounter((prev) => prev + 1);
      products.map((item) => {
        if (item.id === data.id) {
          item.quantity = counter + 1;
        }
      });
      try {
        const response = await updateCart({
          idCart: cart.id,
          credentials: localStorage.getItem("t1"),

          product: products,
        });

        console.log("Product added to cart", response);
        dispatch(initCart(response.data));
      } catch (err) {
        console.error("Failed to update cart", err);
      }
      // console.log(products);
    }

    if (side === "-") {
      setCounter((prev) => prev - 1);
    }
    console.log(side, counter);
  };

  // useEffect(()=>{

  // },[])

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
          {counter === 0 ? (
            <Button
              title="Add to cart"
              styleName={styles.btn}
              onClick={handleClickAddToCart}
            />
          ) : (
            <Counter
              count={counter}
              big={true}
              setChangeSide={handleCounterChange}
            />
          )}
        </section>
        <section className={styles.subInfo}>
          SKU ID<span> {data.sku}</span>
        </section>
      </div>
    </section>
  );
};

export default OneProductSection;
