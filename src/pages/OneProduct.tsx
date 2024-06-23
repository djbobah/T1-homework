import { useNavigate, useParams } from "react-router-dom";

import OneProductSection from "../components/OneProductSection";

import { useGetProductQuery } from "../services/dummyjsonApi";
import { isTokenExpired } from "../utils/functions";
import Loader from "../utils/Loader";

const OneProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // console.log(isTokenExpired(localStorage.getItem("t1")!));
  if (isTokenExpired(localStorage.getItem("t1")!)) {
    localStorage.removeItem("t1");
    // console.log("remove");
  }
  const { data, isLoading, isError } = useGetProductQuery({
    id: Number(id),
    credentials: localStorage.getItem("t1") || "",
  });
  if (isLoading)
    return (
      <>
        <Loader />
        <p className="container">LOADING...</p>
      </>
    );
  if (isError) navigate("/notfound");

  return <OneProductSection data={data!} />;
};

export default OneProduct;
