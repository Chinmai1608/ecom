import React from 'react'

const Login = () => {
  return (
    <div>
      <container class="w-screen h-screen bg-gradient-to-t ">
      <wrapper class="flex flex-col justify-center w-screen h-screen  bg-img bg-local bg-no-repeat bg-center bg-cover">
       <div class="backdrop-blur-sm">
        <p class="text-4xl font-bold flex flex-row p-12 font-mono justify-center">
          <div class="bg-opacity-70 p-2 pt-3 px-8  rounded-tl-full rounded-br-full bg-white">  
            <div class=" bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 bg-sky-800">
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
              <span class="p-2 flex flex-row justify-center">
                <input
                  class="p-1.5 rounded-full pl-5 bg-teal-50 ring-1 active:shadow-md active:shadow-black"
                  placeholder="Password"
                />
              </span>
                  
            <div class="flex flex-row justify-center m-8">
              <button class="bg-gradient-to-tr from-teal-200 via-teal-600 to-teal-200 hover:shadow-sm hover:shadow-black p-2 px-4 rounded-full ring-1 ring-teal-800 hover:text-white">
                Login
              </button>
            </div>
            <div class="flex flex-row justify-center ">
              <a class="px-2 m-2 text-xs bg-opacity-50 bg-white">Forgot Password?</a>
              <a class="px-2 m-2 text-xs bg-opacity-50 bg-white">Create a New Account</a>
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