import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Button,Skeleton } from "antd";
import {
    GoogleOutlined
  } from '@ant-design/icons';
const Social_Login = () => {

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate= useNavigate();
    let errorElement;
    if (user) {
      navigate(from, { replace: true });
    }
  
    if(loading) {
      return <Skeleton />;
     }
   
    if (error) {
      errorElement = <p style={{ color: "red" }}>Error: {error?.message}</p>;
    }
    return (
        <div>
              {errorElement}
             <Button onClick={() => signInWithGoogle()}><GoogleOutlined />Google Login</Button>
        </div>
    );
};

export default Social_Login;