import {
  Facebook,
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

const Footer = () => {
  return (
    <container class="flex">
      <left class=" flex flex-1 flex-col  p-3">
        <div class=" flex justify-center m-6">  
          <div class="bg-clip-border bg-gradient-to-br  from-white via-slate-200 to-white">   
            <div class="bg-white">  
              <div class="bg-slate-50 rounded-tl-full rounded-br-full px-8 m-0.5">        
                <logo class="text-3xl font-bold m-6 mb-0 font-serif">
                  <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-yellow-500 to-sky-700">
                    LAMA.
                  </span>
                </logo>
              </div>
            </div>
          </div>
        </div>
        <desc class="m-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          blanditiis quidem harum in sunt. Nisi id dolore fuga maxime
          repellendus vel vero perspiciatis obcaecati aspernatur quaerat? Dolore
          numquam perspiciatis quas.
        </desc>
        <socialContainer class="flex flex-row mx-6 px-12 justify-between ">
          <div class="scale-100 hover:scale-125 ease-in duration-100">
            <Facebook />
          </div>
          <div class="scale-100 hover:scale-125 ease-in duration-100">
            <Pinterest />
          </div>
          <div class="scale-100 hover:scale-125 ease-in duration-100">
            <Twitter />
          </div>
          <div class="scale-100 hover:scale-125 ease-in duration-100">
            <Instagram />
          </div>
          <div class="scale-100 hover:scale-125 ease-in duration-100">
            <LinkedIn />
          </div>
          <div class="scale-100 hover:scale-125 ease-in duration-100">
            <WhatsApp />
          </div>
        </socialContainer>
      </left>
      <center class="flex-1 m-6">
        <h1 class="m-6 text-2xl">Useful Links</h1>
        <ul class="flex-wrap">
          <li>
            <a href="http://localhost:3000/">Home</a>
          </li>
          <li>Cart</li>
          <li>Men's Fashion</li>
          <li>Women's Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </center>
      <right class="flex-1 m-6">
        <h1 class="m-6 text-2xl ml-10">Contact</h1>
        <p class="py-1">
          <Room /> 622 Dixie Path, South Tobinchester 98336
        </p>
        <p class="py-1">
          <Phone /> +1 234 56 78
        </p>
        <p class="py-1">
          <MailOutline /> contact@lama.dev
        </p>
        <div class="  grid grid-cols-2 ">
          <div class="flex flex-col m-5">
            <div class="cursor-pointer flex py-2 justify-center">
              Credit Card
            </div>
            <img src="//js.pngtree.com/web3/images/pay/pay_card.png" />
          </div>
          <div class="flex flex-col m-5">
            <div class="cursor-pointer flex py-2 justify-center">Pay Pal</div>
            <img src="//js.pngtree.com/web3/images/p5.png" />
          </div>
        </div>
      </right>
    </container>
  );
};

export default Footer;
