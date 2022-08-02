import React, { useEffect, useState } from "react";
import { Button, Divider, Popconfirm, Table ,Skeleton} from "antd";
import { Layout, Menu } from "antd";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";

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
        fetch(`https://guarded-spire-98931.herokuapp.com/orders?email=${email}`,{
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
 
  }, [products]);

  const handleCancel = (id) => {
    console.log(id);
    const url = `https://guarded-spire-98931.herokuapp.com/orders/${id}`;
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
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Payable amount",
      dataIndex: "paid_amount",
    },
    {
      title: "Payment",
      dataIndex: "payment",
      render: (_, record) =>
        products.length >= 1 ? (
          
          !record.paid ? <Link
            to={`/dashboard/payment/${record._id}`}
          >
            <a>Click Here for Payment</a>
          </Link>: <span style={{color:"green"}}>paid</span> 
          
        ) : null,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        products.length >= 1 ? (
          
          !record.paid &&  <Popconfirm
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
