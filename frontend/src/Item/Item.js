import React from 'react'
import { Footer } from '../Home/Footer'
import Nav from '../Nav/Nav'
import { QuantityPicker } from 'react-qty-picker';
import Individual_item from './individual_idem'

const Item = (props) => {
    return (
        <div>
            <Nav />
            <Individual_item id={props.id}/>
            <Footer/>
        </div>
    )
}

export default Item
