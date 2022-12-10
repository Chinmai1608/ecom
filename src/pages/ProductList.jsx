import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <span class=" text-3xl p-3 bg-teal-50 flex justify-center rounded-full shadow-md underline text-teal-900 m-6 mb-10 ">
        Dresses
      </span>
      <filtercontainer class="flex justify-between">
        <div>
          <filter class="text-2xl m-1">Filter Products:</filter>

          <select class="py-1 px-3 m-1 rounded-full border-black bg-teal-50 ring-1 ring-teal-600">
            <option disabled selected>
              Colour
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
            <option>All</option>
          </select>

          <select class="py-1 px-3 m-1 border-black rounded-full bg-teal-50 ring-1 ring-teal-600 ">
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
        <div>
          <filter class="text-2xl m-1 ">Sort Products:</filter>

          <select class="py-1 px-3 m-1 border-black rounded-full bg-teal-50 ring-1 ring-teal-600">
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (Desc)</option>
            <option>Trending</option>
            <option>Men's</option>
            <option>Women's</option>
            <option>Kid's</option>
          </select>
        </div>
      </filtercontainer>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
