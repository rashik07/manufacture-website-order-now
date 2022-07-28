import React, { useEffect } from "react";
import { Button, Skeleton, Form, Input, Layout } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Social_Login from "./Social_Login";
import { useForm } from "react-hook-form";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { register, formState: { errors }, handleSubmit } = useForm();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
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
            <form onSubmit={handleSubmit(onFinish)}>

              <div style={{marginBottom:"10px"}}>
                <span >Email: </span>

                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: 'Email is Required'
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email'
                    }
                  })}
                />




                {errors.email?.type === 'required' && <span style={{color:"red"}}>{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span style={{color:"red"}}>{errors.email.message}</span>}
              </div>

              <div style={{marginBottom:"10px", marginLeft:"-22px"}}>
                <span className="label-text">Password: </span>

                <input
                  type="password"
                  placeholder="Password"

                  {...register("password", {
                    required: {
                      value: true,
                      message: 'Password is Required'
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 characters or longer'
                    }
                  })}
                />
                <label className="label">
                  {errors.password?.type === 'required' && <span style={{color:"red"}}>{errors.password.message}</span>}
                  {errors.password?.type === 'minLength' && <span style={{color:"red"}}>{errors.password.message}</span>}
                </label>


              </div>

              <p><small>New to Motor Parts Gellary <Link  to="/registration">Create New Account</Link></small></p>

              <input style={{marginBottom:"10px" , backgroundColor:"#1890ff" , color:"white"}} type="submit" value="Login" />
            </form>
            {errorElement}
            <Social_Login></Social_Login>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Login;
