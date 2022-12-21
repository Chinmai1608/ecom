import React from 'react'
import styled from 'styled-components';  
import Categories from '../components/Categories';
import  Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Product from '../components/Product';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
        <Copyright/>
    </div>
  )
}

export default Home;