import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Button, Skeleton, Descriptions, Layout, Row, Col, Drawer } from "antd";
import Order from "../Order/Order";

const SingleProduct = () => {
  const [visible, setVisible] = useState(false);
  const { product_id } = useParams();
  const { isLoading, error, data } = useQuery(["product", product_id], () =>
    fetch(`https://guarded-spire-98931.herokuapp.com/products/${product_id}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Skeleton />;
  }

  const { Header, Content, Footer, Sider } = Layout;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "24px 16px 16px",
            overflow: "initial",
          }}
        >
          <div className="site-layout-content">
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                <img src={data.img} alt="" />
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 16 }}>
                <Descriptions
                  title={data.name}
                  column={{
                    xxl: 4,
                    xl: 3,
                    lg: 3,
                    md: 3,
                    sm: 2,
                    xs: 1,
                  }}
                  layout="vertical"
                  extra={
                    <Button type="primary" onClick={showDrawer}>
                      Click For Place Order
                    </Button>
                  }
                >
                  <Descriptions.Item label="Price">
                    {data.price}
                  </Descriptions.Item>
                  <Descriptions.Item label="Available Quantity">
                    {data.available_quantity}
                  </Descriptions.Item>
                  <Descriptions.Item label="Minimum Order">
                    {data.minimum_order}
                  </Descriptions.Item>

                  <Descriptions.Item label="Description">
                    {data.short_discription}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Drawer
                title="Basic Drawer"
                placement="right"
                onClose={onClose}
                visible={visible}
              >
                <Order product={data}></Order>
              </Drawer>
            </Row>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default SingleProduct;
