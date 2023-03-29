import React, { useEffect, useState } from 'react'
import Individual_cart from './Individual_cart_ordre'
import { fetchUser } from '../Logics/Logic'
import Nav from '../Nav/Nav'
import { Footer } from '../Home/Footer'
import { Button, useToast } from '@chakra-ui/react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import useRazorpay from 'react-razorpay'

const Cart = () => {

    const [user, setUser] = useState()
    const navigate = useNavigate()
    const toast = useToast()
    const Razorpay = useRazorpay();

    useEffect(() => {
        fetchUser().then((res) => {
            setUser(res)

        })

    }, [])


    const items = { ...sessionStorage };
    const itemsArray = Object.keys(items).map((key) => {
        return JSON.parse(items[key]);
    });
    // console.log(itemsArray)
    let item_ids = "";
    itemsArray.map((item) => {
        item_ids = item_ids + item._id + "_"
    })



    const total = itemsArray.reduce((acc, item) => {
        return acc + item.price * item.qtyx;
    }, 0);

    const totalItems = itemsArray.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    const token = JSON.parse(localStorage.getItem("token"));
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };


    const initPayment = (data) => {
        const options = {
            key: "rzp_test_A5nfFb3qV9GdGB",
            amount: 100,
            currency: "INR",
            name: "Moody Spark",
            description: "Test Transaction",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnkVcTwcImbHwhqNKBTLAbtWuuyaGfOfkMw&usqp=CAU",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyUrl = "http://localhost:5000/api/payment/verify";
                    const { data } = await axios.post(verifyUrl, response);
                    console.log(data);
                    item_ids = "";
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

    const checkout = async () => {


        // const res = await axios.post('/api/payment/ids/'+item_ids)
        // if (res.status  ) {

        // }
        try {
            const orderUrl = "http://localhost:5000/api/payment/do/" + item_ids;
            const res = await axios.post(orderUrl);
            initPayment(res.data.data);
        } catch (error) {
            console.log(error);
            return;
        }

        itemsArray.forEach((item) => {
            axios.post('/api/order/create/' + item._id, {
                qty: item.qtyx,
                name: item.name,
                size: item.sizex,
                address: user.address,
                city: user.city,
                state: user.state,
                pincode: user.pincode
            }, config)


        }
        )
        sessionStorage.clear();
        item_ids = "";
        toast({
            title: "Order placed",
            description: "Your order has been placed",
            status: "success",
            duration: 5000,
            isClosable: true,
        })

    }

    const clearcart = () => {
        sessionStorage.clear()
        window.location.reload()
    }
    return (
        <div>
            <Nav />
            {
                itemsArray?.map((item) => {
                    return (
                        <Individual_cart _id={item._id} name={item.name} producturl={item.imageurl} price={item.price} tprice={item.price * item.qtyx} qty={item.qtyx} address={user?.address + " " + user?.city + " " + user?.state + " " + user?.pincode} />
                    )
                })

            }
            <div style={{ position: "sticky" }}>
                <Button onClick={checkout} ml={250} width={480}> Checkout >> RS {total}</Button>
                <Button onClick={clearcart} mt={-69} ml={800} width={480}> clear cart</Button>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
