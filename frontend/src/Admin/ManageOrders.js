import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleOrder from './SingleOrder'

const ManageOrders = () => {

    const [orders, setOrders] = useState()

    const fetchOrders = async () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const config = { headers: { Authorization: `Bearer ${token}` } }
        const response = await axios.get('api/order/getall', config)
        console.log(response.data)
        setOrders(response.data)
    }

    useEffect(() => {
        fetchOrders();
    }, [orders])



    return (
        <div>
            {
                orders?orders.map((order) => {
                    return <SingleOrder name={order.user.firstName + " "+order.user.lastName} status={order.status} price={order.price} qty={order.qty} imageurl={order.itemurl}  address={order.address + ", " + order.city + ", " + order.state+", " + order.pincode} id={order._id} />
                }):console.log(1)

            }
        

        </div>
    )
}

export default ManageOrders
