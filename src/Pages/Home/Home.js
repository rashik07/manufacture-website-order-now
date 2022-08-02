import React from "react";

import Banner from "./Banner";
import OfferCard from "./OfferCard";
import { Card, Col, Layout, Row } from "antd";
import Footers from "../Shared/Footers";
import Products from "../Products/Products";
import Review from "./Review";

const Home = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <div>
      <Banner></Banner>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className="site-layout-content">
          <OfferCard></OfferCard>

          <Products></Products>
          <Review></Review>
        </div>
        <Footers></Footers>
      </Content>
    </div>
  );
};

export default Home;
