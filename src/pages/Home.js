import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Product from '../components/Product'

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <Product />
            <Footer />
        </div>
    )
}

export default Home
