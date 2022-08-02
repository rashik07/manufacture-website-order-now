import React from "react";
import { useParams } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Button, Skeleton, Descriptions, Layout, Row, Col, Drawer } from "antd";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CheckoutForm from "../Dashboard/CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51LRzcUBCqUYQrxJuaeinOhQvX4H7Wk73VZraFjJdnMErmuKwrY29w6TAXoZLdLGK67XR1KzRihxtls1bevHclDRg00eJXcm5RL"
);

const Payment = () => {
 
  const { id } = useParams();
  const url = `https://guarded-spire-98931.herokuapp.com/orders/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Skeleton />;
  }
  console.log(order);

 

  return (
    <>
     
      <Elements stripe={stripePromise}>
        <CheckoutForm  order={order}/>
      </Elements>
    </>
  );
};

export default Payment;
