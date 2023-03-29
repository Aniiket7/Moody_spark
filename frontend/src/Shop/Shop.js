import React, { useState, useEffect } from 'react'

import Nav from '../Nav/Nav'
import { Footer } from '../Home/Footer'
import Product from './Product'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'


const Shop = (props) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const token2 = JSON.parse(token);
    const fetchUser = async () => {
        console.log(token);
        
        const { data } = await axios.get(`/api/user/getuser/${token2}`);
            console.log(data);
    }

    fetchUser();


    const [products, setProducts] = useState({});
    useEffect(() => {
        const fetchProducts = async () => {
            await axios.get('/api/products/getall').then((Response) => {
                setProducts(Response.data);
            })
        };
        fetchProducts();
    }, []);

    // console.log(products.products[0]);

    return (
        <div>
            <Nav />
            {
                products.products?.map((item, index) => { return <Product id={item._id} name={item.name} price={item.price} url={item.imageurl} /> })
            }
            <Footer />
        </div>
    )
}

export default Shop
