import React, { useEffect } from "react";
import { Button, Skeleton, Form, Input, Layout } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// import Social_Login from "./Social_Login";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    if(loading) {
      return <Skeleton />;
     }
   

  if (user) {
    navigate(from, { replace: true });
  }


  if (error) {
    errorElement = <p style={{ color: "red" }}>Error: {error?.message}</p>;
  }

  const navigateRegister = (event) => {
    navigate("/registration");
  };

  const onFinish = (values) => {
    signInWithEmailAndPassword(values.email, values.password);
    console.log("Success:", values);
 

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
            <h1>Login</h1>
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
              <p>
                New Here?{" "}
                <Link to="/registration" onClick={navigateRegister}>
                  Please Register
                </Link>
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
            {errorElement}
            {/* <Social_Login></Social_Login> */}
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Login;
// import React from 'react';

// const Login = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default Login;