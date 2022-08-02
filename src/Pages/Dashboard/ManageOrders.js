import React, { useEffect, useState } from "react";
import { Button, Divider, Popconfirm, Table } from "antd";
import { Layout, Menu } from "antd";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ManageOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const email = user?.email;
    console.log(email);
    useEffect(() => {
      fetch(`https://guarded-spire-98931.herokuapp.com/allorders/`)
        .then((res) => res.json())
        .then((data) => {
     
        //   const remaining = data.filter((product) => product.email == email);
        setOrders(data);
          console.log(data);
        });
    }, [orders]);
  
    const handleDelete = (id) => {
      console.log(id);
      const url = `https://guarded-spire-98931.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = orders.filter((product) => product._id !== id);
          setOrders(remaining);
        });
    };
    const columns = [
      {
        title: "Email",
        dataIndex: "email",
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
      },
      {
        title: "Payable Amount ",
        dataIndex: "paid_amount",
      },
      {
        title: "Phone ",
        dataIndex: "phone",
      },
      {
        title: "Address ",
        dataIndex: "address",
      },
      {
        title: "operation",
        dataIndex: "operation",
        render: (_, record) =>
        orders.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record._id)}
            >
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
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
            // className="site-layout-background"
            style={{
              padding: 24,
              textAlign: "center",
            }}
          >
                <h1>All Orders</h1>

            <Table columns={columns} dataSource={orders} />
          </div>
        </Content>
        </div>
    );
};

export default ManageOrders;