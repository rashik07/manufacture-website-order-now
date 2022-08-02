import React, { useEffect, useState } from "react";
import { Button, Divider, Popconfirm, Table } from "antd";
import { Layout, Menu } from "antd";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ProductList = () => {

    const [user, loading] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const email = user?.email;
    console.log(email);
    useEffect(() => {
      fetch(`https://guarded-spire-98931.herokuapp.com/products/`)
        .then((res) => res.json())
        .then((data) => {
     
        //   const remaining = data.filter((product) => product.email == email);
          setProducts(data);
          console.log(data);
        });
    }, [user]);
  
    const handleDelete = (id) => {
      console.log(id);
      const url = `https://guarded-spire-98931.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    };
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Quantity",
        dataIndex: "available_quantity",
      },
      {
        title: "Added By(Email)",
        dataIndex: "email",
      },
      {
        title: "operation",
        dataIndex: "operation",
        render: (_, record) =>
          products.length >= 1 ? (
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
            <h1>My Products:{products.length}</h1>

            <Table columns={columns} dataSource={products} />
          </div>
        </Content>
  
        </div>
    );
};

export default ProductList;