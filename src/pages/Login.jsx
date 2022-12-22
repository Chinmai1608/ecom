import { Visibility, VisibilityOff } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

const Login = () => {
  const [open, setopen] = useState(false)

  const toggle = () => {
    setopen(!open)
  }

  return (
    <div>
      <Navbar/>
      <container class="w-screen h-screen bg-gradient-to-t ">
      <wrapper class="flex flex-col justify-center md:w-screen h-screen  bg-img bg-local bg-no-repeat bg-center bg-cover">
       <div class="backdrop-blur-sm h-full">
        <p class="text-4xl font-bold flex flex-row p-12 font-mono justify-center">
          <div class="bg-opacity-70 p-2 pt-3 px-8  rounded-tl-full rounded-br-full bg-white">  
            <div class=" bg-clip-text font-serif text-2xl md:text-3xl text-transparent bg-gradient-to-b from-teal-700 via-slate-500 bg-slate-900">
              SIGN IN
            </div>
          </div>
        </p>
        <div>
          <form class="flex flex-col justify-between">
            
              <span class="p-2 flex flex-row justify-center">
                <input
                  class="p-1.5 rounded-full pl-5 bg-teal-50 ring-1 active:shadow-md active:shadow-black"
                  placeholder="Username"
                />
              </span>
              <span class=" flex flex-row justify-center">  
                <span class="p-2 w-fit flex flex-row relative">
                  <input
                    class="p-1.5 rounded-full pl-5 bg-teal-50 ring-1 active:shadow-md active:shadow-black"
                    placeholder="Password"
                    type={(open === false)? 'password':'text'}
                  />
                  <div class="p-1.5 cursor-pointer absolute right-3 bottom-2">
                    { (open === false)? <Visibility onClick={toggle}/>:
                  <VisibilityOff onClick={toggle}/>}
                  </div>              
                </span>
              </span>
            
            <div class="flex flex-row justify-center m-8">
              <button class=" bg-gradient-to-tr from-teal-200 via-teal-600 to-teal-200 hover:shadow-sm hover:shadow-black p-2 px-4 rounded-full ring-1 ring-teal-800 hover:text-white">
                LOGIN
              </button>
            </div>
            <div class="flex flex-row justify-center ">
              <a class="px-2 m-2 text-xs hover:underline cursor-pointer" href="./register">Forgot Password?</a>
              <a class="px-2 m-2 text-xs hover:underline cursor-pointer" href="./register">Create a New Account</a>
            </div>
          </form>
        </div>
       </div>
      </wrapper>
    </container>       
    </div>
  )
}

export default Login