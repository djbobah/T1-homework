import { useNavigate, useParams } from "react-router-dom";
// import goods from "../mock/goods.json";

import OneProductSection from "../components/OneProductSection";

import { useGetProductQuery } from "../services/dummyjsonApi";
// import { IProduct } from "../types/ProductTypes";

const OneProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetProductQuery(Number(id));
  if (isLoading) return <p className="container">Идет загрузка данных...</p>;
  if (isError) navigate("/notfound");

  return <OneProductSection data={data!} />;
  // return <Error />;
};

export default OneProduct;
