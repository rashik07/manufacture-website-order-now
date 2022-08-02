import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Product from "./Product";
import { Avatar, Card, Col, Row,Skeleton } from "antd";

const Products = () => {
  const { isLoading, error, data } = useQuery(["product"], () =>
    fetch("https://guarded-spire-98931.herokuapp.com/products").then((res) => res.json())
  );
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <div>
      {/* {console.log(data)} */}
      <br />
      <h1>Products</h1>
      <Row justify="space-between" gutter={16}>
        {data.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </div>
  );
};

export default Products;
