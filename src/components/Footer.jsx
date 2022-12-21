import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
  WhatsApp
} from "@mui/icons-material";
import React from "react";
import Home from "../pages/Home";

const Footer = () => {
  return (
    <container class="md:grid-cols-3 grid grid-cols-1">
      <left class=" flex flex-1 flex-col  p-3">
        <div class=" flex justify-center m-6">  
          <div class="bg-clip-border bg-gradient-to-br  from-white via-slate-200 to-white">   
            <div class="bg-white">  
              <div class="bg-slate-50 rounded-tl-full rounded-br-full px-8 m-0.5">        
                <logo class="text-3xl font-bold m-6 mb-0 font-serif">
                  <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-yellow-500 to-sky-700">
                    <a href="../home">LAMA</a>
                  </span>
                </logo>
              </div>
            </div>
          </div>
        </div>
        <desc class="m-6 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          blanditiis quidem harum in sunt. Nisi id dolore fuga maxime
          repellendus vel vero perspiciatis obcaecati aspernatur quaerat? Dolore
          numquam perspiciatis quas.
        </desc>
        <socialContainer class="flex flex-row mx-6 px-12 justify-between ">
          <a href="https://github.com/Chinmai1608/ecom" class="scale-100 hover:scale-125 ease-in duration-100">
            <GitHub />
          </a>
          <a href="" class="scale-100 hover:scale-125 ease-in duration-100">
            <Pinterest />
          </a>
          <a href="" class="scale-100 hover:scale-125 ease-in duration-100">
            <Twitter />
          </a>
          <a href="" class="scale-100 hover:scale-125 ease-in duration-100">
            <Instagram />
          </a>
          <a href="" class="scale-100 hover:scale-125 ease-in duration-100">
            <LinkedIn />
          </a>
          <a href="https://web.whatsapp.com/" class="scale-100 hover:scale-125 ease-in duration-100">
            <WhatsApp />
          </a>
        </socialContainer>
      </left>
      <center class="flex-1 m-6">
        <h1 class="m-6 text-2xl">Useful Links</h1>
        <ul class="grid md:grid-cols-1 grid-cols-2 ">
          <li>
            <a href="../Home">Home</a>
          </li>
          <a href="../cart">Cart</a>
          <a href="../ProductList">Men's Fashion</a>
          <a href="../ProductList">Women's Fashion</a>
          <a href="">Accessories</a>
          <a href="">My Account</a>
          <a href="">Order Tracking</a>
          <a href="">Wishlist</a>
          <a href="">Terms</a>
          <a href="">About Us</a>
        </ul>
      </center>
      <right class="flex-1 m-6">
        <h1 class="m-6 text-2xl ml-10 flex justify-center">Contact</h1>
        <div class="flex flex-row justify-center">
          <div > 
            <p class="py-1">
              <Room /> 622 Dixie Path, South Tobinchester 98336
            </p>
            <p class="py-1">
              <Phone /> +1 234 56 78
            </p>
            <a href="https://bit.ly/3YAxc3I" class="py-1">
              <MailOutline /> contact@lama.dev
            </a>
          </div>
        </div>
        <div class="  grid grid-cols-2 ">
          <div class="flex flex-col m-5">
            <div class="cursor-pointer flex py-2 justify-center">
              Credit Card
            </div>
            <img class="max-w-fit min-w-0 flex mx-auto" src="//js.pngtree.com/web3/images/pay/pay_card.png" />
          </div>
          <div class="flex flex-col m-5">
            <div class="cursor-pointer flex py-2 justify-center">Pay Pal</div>
            <img class="max-w-fit min-w-0 flex mx-auto" src="//js.pngtree.com/web3/images/p5.png" />
          </div>
        </div>
      </right>
    </container>
  );
};

export default Footer;
