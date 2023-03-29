import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard'
import Nav from '../Nav/Nav'
import {Footer} from '../Home/Footer'
import axios from 'axios'


const Order = () => {

    const [order, setOrder] = useState()
    const [tshirt, setTshirt] = useState()
    const [user, setUser] = useState()
    const token = JSON.parse(localStorage.getItem('token'))
    const config = { headers: { Authorization: `Bearer ${token}` } }
    const fetchuser = async () => {
        
        const res = await axios.get('api/user/getuser/'+token)
        setUser(res.data)
    }


    const fetchorder = async () => {
        const response = await axios.get('/api/order/get', config)
        console.log(response.data)
        setOrder(response.data) 

    }

    useEffect(() => {
        fetchuser()
        fetchorder()
        console.log(order);
       
    }, [])
    return (
        <div>
            <Nav/>
            {order?.map((order) => {
                return <OrderCard name={order.itemname} status={order.status} price={order.price} qty={order.qty} imageurl={order.itemurl}  address={order.address + ", " + order.city + ", " + order.state+", " + order.pincode} iid={order.itemid} />
            })}
            <Footer/>
        </div>
    )
}

export default Order
