import { useNavigate, useParams } from "react-router-dom";
import goods from "../mock/goods.json";
import { useEffect } from "react";
import OneProductSection from "../components/OneProductSection";

const OneProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const findProductById = (id: number) => {
    return goods.find((item) => item.id === id);
  };

  const product = findProductById(Number(id));

  console.log(product);
  useEffect(() => {
    if (!product) {
      navigate("/notfound");
    }
  }, [id]);

  return <OneProductSection />;
};

export default OneProduct;
