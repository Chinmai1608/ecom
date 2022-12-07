import React from "react";
//import styled from "styled-components";
//import logo from "/home/chinmai/vs.code/E-Commerce/ecom/src/components/shopping-cart.png"
//import { FC } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Margin, Search, ShoppingCartSharp } from "@mui/icons-material";
import { Badge } from "@mui/material";
//import { bgcolor } from "@mui/system";
//import SearchContainer from '@mui/icons-material/Search';

//interface Props {}

export default function Example() {
  return (
    <div>


      <div className="bg-teal-500 flex justify-center">
        <p class="text-white">Super Deal! Free shipping on Orders over $50</p>
      </div>

      <div class="flex flex-row px-5 py-2  justify-between align-middle ">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-center">
          <p class="px-3 cursor-pointer">EN</p>
          </div>
          <div class="px-3 flex flex-col justify-center">
            <div class="flex flex-row">
            <div className="flex flex-col justify-center">
              <SearchIcon /> 
            </div>
              <input class=""
                type="text"
                style={{
                  height:"30px",
                  border: "1px solid black",
                  borderRadius:"25px"
                  
                  
                }}
                placeholder= "  Search"  />
            </div>
          </div>

        </div>

        <div>
          <p>
            <p class="font-serif font-extrabold text-5xl  ">LAMA.</p>
          </p>
        </div>

        <div class=" flex flex-row justify-end">
          <div class="flex flex-col justify-center">
            <p class="px-5 cursor-pointer">REGISTER</p>
          </div>
          <div class="flex flex-col justify-center">
            <p class="px-5 cursor-pointer">SIGN IN</p>
          </div>
           <div class="flex flex-col justify-center">
            <Badge badgeContent={4} Colour="primary">

              <ShoppingCartSharp />

            </Badge>
           </div>
        </div>


      </div>
    </div>
  );
};

