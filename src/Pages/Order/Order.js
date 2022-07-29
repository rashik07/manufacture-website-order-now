import React, { useState } from "react";
import { Button, Form, Input, InputNumber, message, Popconfirm } from "antd";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Order = (product) => {
  console.log(product);
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const [user] = useAuthState(auth);
  const { TextArea } = Input;
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  const navigate = useNavigate();

  const onFinish = (values) => {
    fetch("http://localhost:5000/orders", {
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
      const quantity = product.product.available_quantity - values.quantity;

      const updatedProduct = { quantity };
  
      // send data to the server
      const url = `http://localhost:5000/products/${values.id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("success", data);
          alert("quantity update successfully!!!");
        //   window.location.reload();
        navigate("/dashboard/myorder");
        });
    console.log("Success:", values);
    // message.success("Successfully Added Your Order");
    // navigate("/myorder");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.success("not added");
  };

  return (
    <div>
      <h1>Please fill Info and Submit</h1>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          id: product.product._id,
          name: user.displayName,
          email: user.email,
          quantity: product.product.minimum_order,
        }}
        onValuesChange={onFormLayoutChange}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="id " name="id" hidden>
          <Input placeholder="input placeholder" disabled />
        </Form.Item>
        <Form.Item label="Name " name="name">
          <Input placeholder="input placeholder" disabled />
        </Form.Item>
        <Form.Item label="Email " name="email">
          <Input placeholder="input placeholder" disabled />
        </Form.Item>
        <Form.Item label="Amount" name="quantity">
          <InputNumber
            min={product.product.minimum_order}
            max={product.product.available_quantity}
            placeholder="input placeholder"
          />
        </Form.Item>
        <Form.Item label="Phone " name="phone">
          <Input placeholder="enter phone no" />
        </Form.Item>
        <Form.Item label="Address " name="address">
          <TextArea rows={4} placeholder="enter Address" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">
            Place Order
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Order;
