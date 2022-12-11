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

//import Product from './components/Product';
//
export default function App() {
  return(
    <Router>
      <Routes>
      <Route exact path ='/' element={<Home/>} /> 
      </Routes>
    </Router>
  )
}
 