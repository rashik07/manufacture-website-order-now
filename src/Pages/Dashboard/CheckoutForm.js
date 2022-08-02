import React, { useEffect, useState } from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
const CheckoutForm = ({order}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [carderror,setCarderror]=useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');

    const {_id,name , email,paid_amount}= order;
  useEffect(() => {
    fetch('https://guarded-spire-98931.herokuapp.com/create-payment-intent', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ paid_amount })
    })
        .then(res => res.json())
        .then(data => {
            if (data?.clientSecret) {
                setClientSecret(data.clientSecret);
            }
        });

}, [paid_amount])

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {
     
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCarderror(error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setCarderror('');
    }
    setSuccess('');
    setProcessing(true);
    // confirm card payment
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    name: name,
                    email: email
                },
            },
        },
    );
    if (intentError) {
        setCarderror(intentError?.message);
        setProcessing(false);
    }
    else {
        setCarderror('');
        setTransactionId(paymentIntent.id);
        console.log(paymentIntent);
        setSuccess('Congrats! Your payment is completed.')
        
        // store payment on database
        const payment = {
            order: _id,
            transactionId: paymentIntent.id
        }
        fetch(`https://guarded-spire-98931.herokuapp.com/order/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)
        }).then(res=>res.json())
        .then(data => {
            setProcessing(false);
            console.log(data);
        })

    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    { carderror && <p style={{color:"red"}}>{carderror.message}</p>}
    { success && <p style={{color:"green"}}>{success}</p>}
    { success && <p style={{color:"green"}}>Your transaction id: {transactionId}</p>}
    </form>
    </div>
  );
};

export default CheckoutForm;
