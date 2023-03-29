import React from 'react'
import Nav from '../Nav/Nav'
import Feature from './Feature'
import { Footer } from './Footer'
import Slider_chocui from './Slider'

const Home = () => {
    return (
        <div>
            <Nav />
            <Slider_chocui />
            <Feature />
            <Footer mt='1200px'/>
        </div>
    )
}

export default Home
