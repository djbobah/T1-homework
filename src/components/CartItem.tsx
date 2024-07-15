import styles from "./CartItem.module.scss";
import Counter from "./Counter/Counter";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../types/ProductTypes";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useAddToCartMutation } from "../services/dummyjsonApi";
import { initCart } from "../store/cartSlice";
import { isTokenExpired } from "../utils/functions";

interface ICartItem {
  product: IProduct;
}

const CartItem: React.FC<ICartItem> = ({ product }) => {
  const navigate = useNavigate();
  const handleClickCard = (id: number) => {
    navigate("/product/" + id);
  };
  const dispatch = useAppDispatch();
  const cart = useAppSelector((store) => store.cart.cart);

  const products = cart.products.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity,
    };
  });

  const [updateCart] = useAddToCartMutation();

  const handleClickDelete = async (id: number) => {
    const updatedProducts = products.filter((item) => item.id !== id);

    if (isTokenExpired(localStorage.getItem("t1") || "")) {
      localStorage.removeItem("t1");
    }
    try {
      const response = await updateCart({
        idCart: cart.id,
        credentials: localStorage.getItem("t1"),
        product: updatedProducts,
      });

      // console.log("Product added to cart", response);
      dispatch(initCart(response.data));
    } catch (err) {
      console.error("Failed to update cart", err);
    }
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
      <Counter data={product} />
      <button onClick={() => handleClickDelete(product.id)}>Delete</button>
    </section>
  );
};

export default CartItem;
