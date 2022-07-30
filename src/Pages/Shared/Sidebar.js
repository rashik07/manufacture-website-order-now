import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
import auth from '../../firebase.init';

import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from "../Hooks/useAdmin";

const Sidebar = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const items = [
    
    {
      label: <Link to="/dashboard">Dashboard</Link>,

      key: "dashboard",
    },
    {
      label: <Link to="/dashboard/myorder">My order</Link>,

      key: "myorder",
    },
    admin? { 
      label: <Link to="/dashboard/allusers">All user</Link>,

      key: "allusers",
    }:"",
  ];
  return (
    <div>
    
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          items={items}
          style={{
            height: '100%',
          }}
        />
       
      
    </div>
  );
};

export default Sidebar;
