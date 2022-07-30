import { Popconfirm, Skeleton, Table } from "antd";
import React from "react";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from "@tanstack/react-query";

const AllUsers = () => {

  const { data: users, isLoading, refetch } = useQuery(['users'], () => fetch('http://localhost:5000/user', {
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
        fetch(`http://localhost:5000/user/admin/${email}`, {
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
            // .then(res => {
            //     if(res.status === 403){
            //         toast.error('Failed to Make an admin');
            //     }
            //     return res.json()})
            // .then(data => {
            //     if (data.modifiedCount > 0) {
            //         refetch();
            //         toast.success(`Successfully made an admin`);
            //     }

            // })
    }

 


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
            // onConfirm={() => handleCancel(record._id)}
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
