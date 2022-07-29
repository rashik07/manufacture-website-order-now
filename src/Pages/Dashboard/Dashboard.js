import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";
import { Layout, Menu, Breadcrumb } from "antd";
import Footers from "../Shared/Footers";

const Dashboard = () => {
  const { Header, Content, Footer, Sider } = Layout;
  return (
    <div>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
       
        <Layout
          className="site-layout-background"
          style={{
            padding: "24px 0",
           
          }}
        >
          <Sider className="site-layout-background" width={200}>
            <Sidebar />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: "100vh",
              backgroundColor:"#fff"
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footers />
    </div>
  );
};

export default Dashboard;
