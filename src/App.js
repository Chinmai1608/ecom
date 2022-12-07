import './App.css';
import React from 'react';
//import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
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
 