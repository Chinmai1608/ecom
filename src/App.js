import React from 'react';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

export default function App() {
  return(
    <Router>
      <Routes>
      <Route exact path ='/navbar' element={<Navbar/>} /> 
      </Routes>
    </Router>
  )
}
