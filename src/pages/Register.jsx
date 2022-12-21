import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import Navbar from '../components/Navbar'

const Register = () => {
  const [open, setopen] = useState(false)

  const toggle = () => {
    setopen(!open)
  }

  return (
   <div>
    <Navbar/> 
    <container class="w-screen h-screen  ">
      <wrapper class="flex flex-col justify-center h-screen md:w-screen md:h-full bg-img  bg-no-repeat bg-cover bg-center">
       <div class="backdrop-blur-sm h-full">
        <p class="text-4xl font-bold flex flex-row p-12 font-mono justify-center">
          <div class="bg-opacity-70 p-2 pt-3 md:px-8 px-6 rounded-tl-full rounded-br-full bg-white"> 
            <div class="bg-clip-text font-serif text-center text-2xl md:text-3xl text-transparent bg-gradient-to-b from-teal-700 via-slate-500 bg-slate-900">
              CREATE AN ACCOUNT
            </div>
          </div>
        </p>
        <div>
          <form class="flex flex-col justify-between">
            <div class="grid grid-cols-1 md:flex md:flex-row md:justify-center">
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
                type="email"
              />
            </span>
            <span class="p-2 flex flex-row justify-center">
              <input
                class="p-1.5 rounded-full pl-5 bg-teal-50 ring-1 active:shadow-md active:shadow-black"
                type={(open === false)? 'password':'text'}
                placeholder="Password"
              />
             
            </span>
            <span class=" flex flex-row justify-center">
              <span class="p-2 w-fit relative flex flex-row "> 
                <input
                  class="p-1.5 rounded-full pl-5 bg-teal-50 ring-1 active:shadow-md active:shadow-black "
                  placeholder="Confirm Password"
                  type={(open === false)? 'password':'text'}                  
                />              
                <div class="p-1.5 cursor-pointer absolute right-3 bottom-2">
                {(open === false)? <Visibility onClick={toggle}/>:
                  <VisibilityOff onClick={toggle}/>}
                </div>
              </span>
            </span>
            <agreement class="flex flex-row justify-center text-xs p-5">
              <div class=" bg-slate-100 ring-2 ring-slate-600 p-3 rounded-md text-center">
                <input type="checkbox" class="mr-1"/>
                    by Creating an account, I Concent to the processing of my
                personal Data in accordance with the PRIVACY POLICY.
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
   </div>
  );
};

export default Register;
