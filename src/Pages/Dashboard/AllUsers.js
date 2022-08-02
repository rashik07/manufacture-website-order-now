import { Popconfirm, Skeleton, Table } from "antd";
import React, { useState } from "react";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from "@tanstack/react-query";

const AllUsers = () => {
  const [user, setUser] = useState([]);
  const { data: users, isLoading, refetch } = useQuery(['users'], () => fetch('https://guarded-spire-98931.herokuapp.com/user', {
    method: 'GET',
    headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
}).then(res => res.json()));
if (isLoading) {
  return <Skeleton></Skeleton>;
}
// const { email, role } = users;
    const makeAdmin = (email) => {
        fetch(`https://guarded-spire-98931.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          refetch();
        })
           
    }


    const handleDelete = (id) => {
      console.log(id);
      const url = `https://guarded-spire-98931.herokuapp.com/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // const remaining = user.filter((user) => user._id !== id);
          setUser(data);
        });
    };


  const columns = [
    // console.log(users.email),
 
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
      users.length >= 1 ? (
        !record.role?  <Popconfirm
            title="Sure to make admin?"
            onConfirm={() => makeAdmin(record.email)}
          >
            <a>Make Admin</a>
          </Popconfirm>:""
        ) : null,
    },
  
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
      users.length >= 1 ? (
          <Popconfirm
            title="Sure to Cancel?"
            onConfirm={() => handleDelete(record._id)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  return (
    <div>
    <h2 className="text-2xl">All Users: {users?.length}</h2>

      <Table columns={columns} dataSource={users} />
    </div>
  );
};

export default AllUsers;
