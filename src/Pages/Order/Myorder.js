import React, { useEffect, useState } from "react";
import { Button, Divider, Popconfirm, Table ,Skeleton} from "antd";
import { Layout, Menu } from "antd";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Myorder = () => {
  const [user, loading] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const email = user?.email;
//   if (loading) {
//     return <Skeleton />;
//   };
  console.log(email);
 

  
  useEffect(() => {
    if(user){
        fetch(`http://localhost:5000/orders?email=${email}`,{
          method: 'GET',
          headers:{
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
      })
        .then((res) => res.json())
        .then((data) => {
          
          setProducts(data);
          console.log(data);
        });
    }
 
  }, [user]);

  const handleCancel = (id) => {
    console.log(id);
    const url = `http://localhost:5000/orders/${id}`;
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
      dataIndex: "quantity",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Adress",
      dataIndex: "adress",
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        products.length >= 1 ? (
          <Popconfirm
            title="Sure to cancel?"
            onConfirm={() => handleCancel(record._id)}
          >
            <a>Cancel</a>
          </Popconfirm>
        ) : null,
    },
  ];


  return (
    <div>
  
            <h1>My Products:{products.length}</h1>

            <Table columns={columns} dataSource={products} />
          
    </div>
  );
};

export default Myorder;
