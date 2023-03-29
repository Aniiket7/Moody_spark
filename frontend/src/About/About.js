import React from 'react'
import { Footer } from '../Home/Footer'
import Nav from '../Nav/Nav'
import About_text from './About_text'
import Testimonial from './Testimonial'


const About = () => {
    return (
        <div>
            <Nav />
            <About_text/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}

export default About
