import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    
    {
      label: <Link to="/dashboard">Dashboard</Link>,

      key: "dashboard",
    },
    {
      label: <Link to="/dashboard/myorder">My order</Link>,

      key: "myorder",
    },
  ];
  return (
    <div>
    
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          style={{
            height: '100%',
          }}
        />
       
      
    </div>
  );
};

export default Sidebar;
