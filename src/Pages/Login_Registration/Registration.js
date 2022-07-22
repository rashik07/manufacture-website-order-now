import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';


import { Button, Skeleton, Form, Input, Layout } from "antd";
import auth from '../../firebase.init';



const Registration = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
   
    const navigate = useNavigate();

    if(loading) {
      return <Skeleton />;
     }

    if (user) {
        navigate('/home');
    }

  
  const onFinish = (values) => {
    createUserWithEmailAndPassword(values.email, values.password);
    updateProfile({ displayName: values.email });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Header, Content, Footer, Sider } = Layout;
  return (
    <div>
      <Layout className="site-layout">
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
            <h1>Registration</h1>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 10,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="confirm_password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password again!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <p>
                Alrady have account? <Link to="/login">Please Login</Link>
              </p>
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
      </Layout>
    </div>
  );
};

export default Registration;