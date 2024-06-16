import styles from "./CartItem.module.scss";
import Counter from "./Button/Counter/Counter";
import { useNavigate } from "react-router-dom";
import { ICartProduct } from "../types/ProductTypes";
// import Loader from "../utils/Loader";

interface ICartItem {
  product: ICartProduct;
}

const CartItem: React.FC<ICartItem> = ({ product }) => {
  const navigate = useNavigate();
  const handleClickCard = (id: number) => {
    navigate("/product/" + id);
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.productInfo}>
        <div className={styles.imageWrapper}>
          <img
            onClick={() => handleClickCard(product.id)}
            src={product.thumbnail}
            alt={"image " + product.title}
          />
        </div>
        <div onClick={() => handleClickCard(product.id)}>
          {product.title} <p>{product.price} $</p>
        </div>
      </div>
      <Counter count={product.quantity} />
      <button>Delete</button>
    </section>
  );
};

export default CartItem;
