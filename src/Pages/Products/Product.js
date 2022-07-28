import React from "react";
import { Avatar, Button, Card , Col, Row} from "antd";
const Product = (product) => {
  const { Meta } = Card;

  console.log(product.product.name);
  return (
    <div>
      
     
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <Card
              style={{
                width: 300,
              }}
              cover={<img alt="example" src={product.product.img} />}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={product.product.name}
                description="This is the description"

              />
              <p>Price:{product.product.price}</p>
              <Button>Purchase</Button>
            </Card>
          </Col>
        

    </div>
  );
};

export default Product;
