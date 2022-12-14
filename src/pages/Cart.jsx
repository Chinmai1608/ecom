import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Cart = () => {
  return (
    <container>
      <Navbar />
      <wrapper class="p-5">
        <div class="font-light text-4xl flex justify-center">YOUR BAG</div>
        <top class="flex justify-between m-4">
          <button class="p-2  ring-1 ring-teal-700 bg-teal-50 rounded-full">
            CONTINUE SHOPPING
          </button>
          <div class="flex ">
            <p class="p-2">Shopping Bag(2)</p>
            <p class="p-2">Your Wishlist(0)</p>
          </div>
          <button class="p-2  ring-1 ring-teal-700 bg-teal-50 rounded-full">
            CHECKOUT NOW
          </button>
        </top>
        <bottom class="flex flex-row">
          
          <div class="w-3/4">  
            <div class="flex justify-between m-3">
              <div class="flex-1 flex justify-center">
                <img
                  class="h-48 "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQeGY0FdwkWaPJ3v3FyUzcleYhSbl5kOVTylz-6ZfHug&s"
                />
              </div>
              <div class="flex flex-col justify-center">
                <prodname>
                  <b>Product:</b> Denim Jacket
                </prodname>
                <prodid>
                  <b>ID:</b> ef67uj98765
                </prodid>
                <div class="flex flex-row">
                  <b>Colour:</b>
                  <prodcolour class="m-1 h-5 w-5 rounded-full bg-blue-800">                  
                  </prodcolour>
                </div>
                <prodsize>
                  <b>Size:</b> L
                </prodsize>
              </div>
              <price class="flex flex-1 justify-center ">
                <pricecontainer class="flex flex-col justify-center">
                  <div class="flex flex-row Justify-center">
                    <Add class="cursor-pointer h-6 w-6" />
                    <quantity> 02 </quantity>
                    <Remove class="cursor-pointer h-6 w-6" />
                  </div>
                  <amount class="text-2xl">$ 30</amount>
                </pricecontainer>
              </price>
             
            </div>
            <hr/>

            <div class="flex justify-between m-3">
              <div class="flex-1 flex justify-center">
                <img
                  class="h-48"
                  src="https://w7.pngwing.com/pngs/176/818/png-transparent-unpaired-black-running-shoe-sneakers-skate-shoe-nike-adidas-a-sports-shoes-white-sport-fashion.png"
                />
              </div>
              <div class="flex flex-col justify-center">
                <prodname>
                  <b>Product:</b> Jessie Thunder Shoes
                </prodname>
                <prodid>
                  <b>ID:</b> 2ws9iyirf7yg4
                </prodid>
                <div class="flex flex-row">
                  <b>Colour:</b>
                  <prodcolour class="m-1 h-5 w-5 rounded-full bg-black">
                  </prodcolour>
                </div>
                <prodsize>
                  <b>Size:</b> 37.5
                </prodsize>
              </div>
              <price class="flex flex-1 justify-center ">
                <pricecontainer class="flex flex-col justify-center">
                  <div class="flex flex-row Justify-center">
                    <Add class="cursor-pointer h-6 w-6" />
                    <quantity> 02 </quantity>
                    <Remove class="cursor-pointer h-6 w-6" />
                  </div>
                  <amount class="text-2xl">$ 45</amount>
                </pricecontainer>
              </price>
              
            </div>
            <hr/>

            <div class="flex justify-between m-3">
              <div class="flex-1 flex justify-center">
                <img
                  class="h-48"
                  src="https://bit.ly/3UNg33G"
                />
              </div>
              <div class="flex flex-col justify-center">
                <prodname>
                  <b>Product:</b> NYC Cap
                </prodname>
                <prodid>
                  <b>ID:</b> ef679iuh762e5
                </prodid>
                <div class="flex flex-row">
                  <b>Colour:</b>
                  <prodcolour class="m-1 h-5 w-5 rounded-full bg-black">
                  </prodcolour>
                </div>
                <prodsize>
                  <b>Size:</b> M
                </prodsize>
              </div>
              <price class="flex flex-1 justify-center ">
                <pricecontainer class="flex flex-col justify-center">
                  <div class="flex flex-row Justify-center">
                    <Add class="cursor-pointer h-6 w-6" />
                    <quantity> 02 </quantity>
                    <Remove class="cursor-pointer h-6 w-6" />
                  </div>
                  <amount class="text-2xl">$ 20</amount>
                </pricecontainer>
              </price>
              
            </div>
            <hr/>
          </div>
          <div class="w-1/4 h-screen ">
            <summary class="flex flex-col justify-evenly ring-1 ring-slate-200 rounded-md">  
              <div class="text-2xl flex flex-row justify-center my-3">
                ORDER SUMMARY
              </div>
              <div class="m-auto">
                <div class="flex justify-between">
                  <item>Subtotal :</item>
                  <div class="bg-slate-50 m-0.5 px-1 rounded-md">$ 80</div>
                </div>
                <div class="flex justify-between">
                  <item>Estimated Shopping :</item>
                  <div class="bg-slate-50 m-0.5 px-1 rounded-md">$ 5.90</div>
                </div>
                <div class="flex justify-between">
                  <item>Shopping Discount :</item>
                  <div class="bg-slate-50 m-0.5 px-1 rounded-md">-$ 5.90</div>
                </div>
                <div class="flex justify-between text-xl">
                  <item type="total">Total :</item>
                  <div class="bg-slate-50 m-0.5 px-1 rounded-md">$ 80</div>
                </div>
              </div>
              <button class="flex justify-center my-4">
                <div class="rounded-full p-2 bg-teal-50 active:shadow-inner ring-1 ring-teal-700 shadow-black">CHECKOUT NOW</div>
              </button>
            </summary>
          </div>

        </bottom>
      </wrapper>
      <Footer />
    </container>
  );
};

export default Cart;


