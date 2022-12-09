import React from "react";
import { Container, Input } from "@mui/material";
import { Description, Send, Title } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <div class="">
      <container class=" bg-teal-50 p-20 h-3/5 flex justify-items-center justify-center ">
        <div class="flex flex-col ">
          <p class="text-3xl my-4 flex justify-center">Newsletter</p>
          <description class=" flex justify-center ">
            <a class="font-bold px-1 text-teal-900">SIGN UP</a> /
            <a class="font-bold px-1 text-teal-900">LOGIN</a> with your Email ID
            and Get timely Updates from your Favorite Products
          </description>
          <div class="flex flex-row mb-7 mt-3  justify-center">
            <Input
              class="mx-auto "
              placeholder="you@example.com "
              name="Email"
              type="email"
            />
            <div className="bg-teal-200 rounded-full ">
              <Send className=" hover:touch-pinch-zoom  transition-colors cursor-pointer bg-teal-200 border-black m-2" />
            </div>
          </div>
        </div>
      </container>
    </div>
  );
};

export default Newsletter;
