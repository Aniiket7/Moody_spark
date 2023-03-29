import { Text } from '@chakra-ui/react';
import React from 'react'
import axios from 'axios';
import useRazorpay from "react-razorpay";
import { useCallback } from "react";






const Pay = () => {
  const Razorpay = useRazorpay();


  const initPayment = (data) => {
    const options = {
      key: "rzp_test_A5nfFb3qV9GdGB",
      amount: 1000,
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:5000/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log("error");
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };



  const dopayment = async () => {
    try {
      const orderUrl = "http://localhost:5000/api/payment/do";
      const res = await axios.post(orderUrl);
      initPayment(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  
  return (
    <div>
      <Text onClick={dopayment}> Pay </Text>
    </div>
  )
}

export default Pay
