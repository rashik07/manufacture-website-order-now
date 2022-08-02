import React from "react";
import { Card, Col, Layout, Row } from "antd";
import { Avatar, List } from "antd";
const MyProtfolio = () => {
  const { Header, Content, Footer } = Layout;
  const data = [
    {
      title: <a href="https://mtcclinic.org/">"Clinic Management System"</a> ,
      description: "This project is running . This is a hospital management software . I am build it by php " ,
 
    },
    {
      title: <a href="https://motor-parts-f4881.web.app/">"Motor Parts Gellary"</a>,
      description: "This is Final Project",
    },
    {
      title: <a href="https://the2hourjob.com/">"the2hourjob"</a>,
      description: "This is one of my best project. But its aws server close due to payment issue",
      
    },
   
  ];
  return (
    <div>
      <Content
        style={{
          padding: "10px 50px",
        }}
      >
        <div className="site-layout-content">
          <h3>Name: Md. Rashik Saif</h3>
          <h3>Email: saif67090707@gmail.com</h3>
          <h3>University: Independent University Bangladesh</h3>
          <h3>Subject: cse</h3>
          <h3>Skills: HTML, CSS , JS, React, Redux, Nextjs, Nodejs, Php, Wordpress</h3>
          <h1>Top 3 Projects</h1>

          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                 
                  title={item.title}
                  description={item.description}
               

                  
                />
              </List.Item>
            )}
          />
         
        </div>
        {/* <Footers></Footers> */}
      </Content>
    </div>
  );
};

export default MyProtfolio;
