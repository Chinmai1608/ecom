import { CheckBox, PanoramaFishEye, Password, RemoveRedEye } from "@mui/icons-material";
import React from "react";

const Register = () => {
  return (
    <container class="w-screen h-screen bg-gradient-to-t ">
      <wrapper class="flex flex-col justify-center w-screen h-screen bg-img bg-local bg-no-repeat bg-cover bg-center">
       <div class="backdrop-blur-sm">
        <p class="text-4xl font-bold flex flex-row p-12 font-mono justify-center">
          <div class="bg-opacity-70 p-2 pt-3 px-8 rounded-tl-full rounded-br-full bg-white"> 
            <div class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 bg-sky-800">
              CREATE AN ACCOUNT
            </div>
          </div>
        </p>
        <div>
          <form class="flex flex-col justify-between">
            <div class="flex flex-row justify-center">
              <span class="p-2 flex flex-row justify-center">
                <input
                  class="p-1.5 rounded-full pl-5 bg-teal-50 ring-1 active:shadow-md active:shadow-black"
                  placeholder="First Name"
                />
              </span>
              <span class="p-2 flex flex-row justify-center">
                <input
                  class="p-1.5 rounded-full pl-5 bg-teal-50 ring-1 active:shadow-md active:shadow-black"
                  placeholder="Last Name"
                />
              </span>
            </div>
            <span class="p-2 flex flex-row justify-center">
              <input
                class="p-1.5 rounded-full pl-5 bg-teal-50 ring-1 active:shadow-md active:shadow-black"
                placeholder="Username"
              />
            </span>
            <span class="p-2 flex flex-row justify-center">
              <input
                class="p-1.5 rounded-full pl-5 bg-teal-50 ring-1 active:shadow-md active:shadow-black"
                placeholder="Email"
              />
            </span>
            <span class="p-2 flex flex-row justify-center">
              <input
                class="p-1.5 rounded-full pl-5 bg-teal-50 ring-1 active:shadow-md active:shadow-black"
                type="Password"
                placeholder="Password"
              />
              <div class="p-1.5 cursor-pointer">
                <RemoveRedEye/>
              </div>
            </span>
            <span class="p-2 flex flex-row justify-center">
              <input
                class="p-1.5 rounded-full pl-5 bg-teal-50 ring-1 active:shadow-md active:shadow-black"
                type="Password"
                placeholder="Confirm Password"
              />
              <div class="p-1.5 cursor-pointer">
                <RemoveRedEye/>
              </div>
            </span>
            <agreement class="flex flex-row justify-center text-xs p-5">
              <div class=" bg-slate-100 ring-2 ring-slate-600 p-3 rounded-md">
                <CheckBox/>
                    by Creating an account, I Concent to the processing of my
                personal Data in accordance with the PRIVACY POLICY
              </div>
            </agreement>
            <div class="flex flex-row justify-center m-8">
              <button class="bg-gradient-to-tr from-teal-200 via-teal-600 to-teal-200 hover:shadow-sm hover:shadow-black p-2 px-4 rounded-full ring-1 ring-teal-800 hover:text-white">
                Create
              </button>
            </div>
          </form>
        </div>
       </div>
      </wrapper>
    </container>
  );
};

export default Register;
