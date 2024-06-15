import { useNavigate, useParams } from "react-router-dom";
// import goods from "../mock/goods.json";

import OneProductSection from "../components/OneProductSection";

import { useGetProductQuery } from "../services/dummyjsonApi";
// import { IProduct } from "../types/ProductTypes";

const OneProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetProductQuery(Number(id));
  console.log(data);
  if (isLoading) return isLoading && <p>Идет загрузка данных...</p>;
  if (isError) navigate("/notfound");

  return <OneProductSection data={data!} />;
};

export default OneProduct;
