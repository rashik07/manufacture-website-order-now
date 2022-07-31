import React from 'react';
import { useParams } from 'react-router-dom';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from "@tanstack/react-query";
  import { Button, Skeleton, Descriptions, Layout, Row, Col, Drawer } from "antd";

const Payment = () => {
    const {id}= useParams();
    const url = `http://localhost:5000/orders/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
    return <Skeleton />;
  }
  console.log(order);

    return (
        <div>
            this is payment page
        </div>
    );
};

export default Payment;