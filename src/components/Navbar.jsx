import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { HomeSharp, ShoppingCartSharp } from "@mui/icons-material";
import { Badge } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Home from "../pages/Home";

const btn = document.querySelector('div.mobile-menu-button');
const menu = document.querySelector('.mobile-menu')






export default function Example() {

  return (
    <div>
      {/* <div class="hidden">
      btn.addEventListener('click', () => {
          menu.classList.toggle('hidden');
  } );

      </div> */}


      <div className="bg-teal-500 flex justify-center">
        <p class="text-white">Super Deal! Free shipping on Orders over $50</p>
      </div>

      <div class="flex flex-row px-5 py-2  justify-between align-middle  ">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-center">
            <a href="../Home" class="px-3 cursor-pointer flex">
              <HomeSharp />
            </a>
          </div>
          <div class="px-3 flex-col justify-center hidden md:flex">
            <div class="flex flex-row">
              <div className="flex flex-col justify-center">
                <SearchIcon />
              </div>
              <input class=""
                type="text"
                style={{
                  height: "30px",
                  border: "1px solid black",
                  borderRadius: "25px"


                }}
                placeholder="  Search" />
            </div>
          </div>

        </div>

        <div class="bg-clip-border bg-gradient-to-br  from-white via-slate-200 to-white">
          <div class="bg-white">
            <div class="bg-slate-50  rounded-tl-full rounded-br-full px-8 m-0.5">
              <p class="font-serif font-extrabold text-5xl mx-8 ">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-yellow-500 to-sky-700" >LAMA.</span>
              </p>
            </div>
          </div>
        </div>

        <div class=" flex flex-row justify-end">
          <div class=" flex-col justify-center hidden md:flex">
            <a href="./Register" class="px-5 cursor-pointer">REGISTER</a>
          </div>
          <div class=" flex-col justify-center hidden md:flex">
            <a href="./Login" class="px-5 cursor-pointer">SIGN IN</a>
          </div>
          <a href="./Cart" class=" flex-col justify-center hidden md:flex">
            <Badge badgeContent={4} Colour="primary">

              <ShoppingCartSharp />

            </Badge>
          </a>
        </div>

        <div class="mobile-menu-button md:hidden flex flex-col justify-center">
          <MenuIcon />
        </div>

      </div>

      <div class="mobile-menu hidden md:hidden">
        <div class="flex  flex-col bg-slate-50 border p-2">
          <a href="#" class="px-8 py-0.5 hover:bg-slate-100 text-sm">Features</a>
          <a href="///." class="px-8 py-0.5 hover:bg-slate-100 text-sm">Products</a>
          <a href="#" class="px-8 py-0.5 hover:bg-slate-100 text-sm">cart</a>
          <a href="#" class="px-8 py-0.5 hover:bg-slate-100 text-sm">Sign in</a>
          <a href="#" class="px-8 py-0.5 hover:bg-slate-100 text-sm">Register</a>
          <a href="#" class="px-8 py-0.5 hover:bg-slate-100 text-sm">Exit</a>
        </div>
      </div>

    </div>



  );
};

