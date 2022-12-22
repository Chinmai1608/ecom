import React from 'react'
import Categories from '../components/Categories';
import  Navbar from '../components/Navbar';
import Slider from '../components/Slider';
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
        <div class="bg-gradient-to-b ">  
          
          <Products/>
          
        </div>
        <Newsletter/>
        <Footer/>
        <Copyright/>
    </div>
  )
}

export default Home;