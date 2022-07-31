import React from "react";
import { Button, Rate, Form, Input, Layout } from "antd";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddReview = () => {
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const onFinish = (values) => {
      console.log(values);
      const url = `http://localhost:5000/reviews`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
      navigate("/home");
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    const { Header, Content, Footer, Sider } = Layout;
    return (
        <div>
            <Content
          style={{
            margin: "24px 16px 16px",
            overflow: "initial",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              textAlign: "center",
              height: "100vh",
            }}
          >
            <h1>Add Reviews</h1>

            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 10,
              }}
              initialValues={{ email: user.email }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item label="Email" name="email">
                <Input disabled />
              </Form.Item>
              <Form.Item
                label="Title"
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item name="rate" label="Rate">
        <Rate />
      </Form.Item>
           
              <Form.Item
                label="Description"
                name="short_discription"
                rules={[
                  {
                    required: true,
                    message: "Please input your description!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 8,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        </div>
    );
};

export default AddReview;