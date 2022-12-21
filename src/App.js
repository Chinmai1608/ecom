import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/> } />
      </Routes>
      <Routes>
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route exact path="/product" element={<Product />} />
      </Routes>
      <Routes>
        <Route exact path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/productList" element={<ProductList />} />
      </Routes>
    </Router>
  );
}
