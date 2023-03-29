import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import axios from 'axios'





const ShowProducts = () => {
    const [products, setProducts] = useState()
    const fetchproducts = async () => {
        const response = await axios.get('/api/products/getall')
        console.log(response.data)
        setProducts(response.data)
    }
    useEffect(() => {
        fetchproducts()
    }, [])

    return (
        <div>
            {
            products?.products.map((product) => {
                return <SingleProduct name={product.name} price={product.price} imageurl={product.imageurl} desc={product.desc} id={product._id}/>}
            )}
        </div>  
    )
}

export default ShowProducts
