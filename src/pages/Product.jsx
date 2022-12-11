import { Add, Circle, Remove } from "@mui/icons-material";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Product = () => {
  return (
    <container>
      <Navbar />
      <wrapper class="flex p-12">
        <image class="w-full flex-1">
          <img 
          src="https://www.eshakti.com/handler/CustomStyleJoinImageHandler01.ashx?p=CL0091306&n=As%20Shown&s=As%20Shown&pl=As%20Shown&pst=Denim%20Jumpsuit" />
        </image>
        <info class="flex-1 p-6">
          <p class="m-6 flex justify-center text-2xl">Denim Jumpsuit</p>
          <desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ad
            laborum sint rem consequuntur reiciendis minima consectetur possimus
            eaque mollitia dicta quas, recusandae labore quae molestias tenetur
            itaque cum deleniti fugiat est, cumque facere ab sequi! Deserunt
            quidem iste officiis?
          </desc>
          <div class="flex justify-center flex-row"> 
            <p class=" line-through text-red-700 my-3 text-lg">$ 25</p>
            <price class=" text-green-800 m-2 text-2xl">$ 20 <sub>Only</sub>  </price>
            <p class="my-3">80% Off</p>
          </div>
          <filtercontainer>
            <filter class="grid grid-cols-2 ">
                <div class="flex justify-center">  
                  <span class="flex flex-row p-1">Colour:
                    <div class="cursor-pointer m-0.5 w-5 h-5 bg-black rounded-full"></div>
                    <div class="cursor-pointer m-0.5 w-5 h-5 bg-blue-900 rounded-full"></div>
                    <div class="cursor-pointer m-0.5 w-5 h-5 bg-gray-600 rounded-full"></div>
                  </span>
                </div>
                <span class="flex justify-center">
                  <select class="py-1 px-3 rounded-full bg-teal-50 ring-1 ring-teal-800 ">  
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </span>
            </filter>
          </filtercontainer>
          <addcontainer class="flex flex-col">
            <amtcontainer class="flex flex-row justify-center py-2">  
              <div class="w-7 h-7">
                <Remove class="cursor-pointer"/>
              </div>
              <amt class="py-0.5 px-1 rounded-sm ring-1 ring-teal-800 bg-teal-50">01</amt>
              <div class="w-7 h-7">
                <Add class="cursor-pointer"/>
              </div>
            </amtcontainer>
            <button class="rounded-sm ring-1 ring-teal-800 bg-teal-50 px-1 m-3 hover:shadow-sm hover:shadow-black">ADD TO CART</button>  
          </addcontainer>
        </info>
      </wrapper>
      <Newsletter />
      <Footer />
    </container>
  );
};

export default Product;
