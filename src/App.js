import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
//import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Slider from './components/Slider';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Products from './components/Products';
import Categories from './components/Categories';

//import Product from './components/Product';
//
export default function App() {
  return(
    <Router>
      <Routes>
      <Route exact path ='/Cart' element={<Cart/>} /> 
      </Routes>
      <Routes>
      <Route exact path ='/Login' element={<Login/>} /> 
      </Routes>
      <Routes>
      <Route exact path ='/Register' element={<Register/>} /> 
      </Routes>
      <Routes>
      <Route exact path ='/Product' element={<Product/>} /> 
      </Routes>
      <Routes>
      <Route exact path ='/Home' element={<Home/>} /> 
      </Routes>
    </Router>
  )
}
 