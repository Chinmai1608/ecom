import { Favorite, FavoriteBorderOutlined, SearchOutlined, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material'
import { useState } from 'react'
import React from 'react'



const Product = () => {

  const [open, setopen] = useState(false)
  
  const toggle = () => {
    setopen(!open)
  }

  const [cart, setcart ] = useState(true)

  const trial = () => {
    setcart(!cart)
  }

  return (
    <container class="flex flex-row flex-wrap justify-center">
        
        <div class="w-52  m-10  border rounded-lg bg-clip-border bg-gradient-to-tr from-red-500  via-yellow-400 to-blue-700">
          <div class="rounded-lg bg-white m-0.5 flex flex-col">  
            <div class="h-64 flex flex-col justify-center">
             <img class="m-3" src="https://bit.ly/3WCBuWe"/>
            </div>
            <info class="flex flex-row justify-center p-2 cursor-pointer">
              {(cart === true)? <ShoppingCartOutlined onClick={trial}/>:
              <ShoppingCart onClick={trial}/>}        
              <SearchOutlined/>        
              {(open === false)? <FavoriteBorderOutlined onClick={toggle} class="h-6 w-6"/>: 
              <Favorite onClick={toggle} class="h-6 w-6 fill-rose-700"/>}
            </info>
          </div>
        </div>

        <div class="w-52  m-10  border rounded-lg bg-clip-border bg-gradient-to-tr from-red-500  via-yellow-400 to-blue-700">
          <div class="rounded-lg bg-white m-0.5 flex flex-col">  
            <div class="h-64 flex flex-col justify-center">
             <img class="m-3" src="https://bit.ly/3G8HIaZ"/>
            </div>
            <info class="flex flex-row justify-center p-2 cursor-pointer">
            {(cart === true)? <ShoppingCartOutlined onClick={trial}/>:
              <ShoppingCart onClick={trial}/>}        
              <SearchOutlined/>        
              {(open === false)? <FavoriteBorderOutlined onClick={toggle} class="h-6 w-6"/>: 
              <Favorite onClick={toggle} class="h-6 w-6 fill-rose-700"/>}             
            </info>
          </div>
        </div>


      <div class="w-52 m-10 border rounded-lg bg-clip-border bg-gradient-to-tr from-red-500 via-yellow-400 to-blue-700">
        <div class="rounded-lg flex flex-col bg-white m-0.5">
          <div class="h-64 flex flex-col justify-center">
           <img class="m-3" src="https://bit.ly/3FD2Mqa"/>
          </div>
          <info class="flex flex-row justify-center p-2 cursor-pointer">
            <ShoppingCartOutlined/>        
            <SearchOutlined/>        
            <FavoriteBorderOutlined/>              
          </info>
        </div>
      </div>

      <div class="w-52 m-10 border rounded-lg bg-clip-border bg-gradient-to-tr from-red-500 via-yellow-400 to-blue-700">
        <div class="rounded-lg flex flex-col bg-white m-0.5">
          <div class="h-64 flex flex-col justify-center">
           <img class="m-3" src="https://bit.ly/3HTvUem"/>
          </div>
          <info class="flex flex-row justify-center p-2 cursor-pointer">
            <ShoppingCartOutlined/>        
            <SearchOutlined/>        
            <FavoriteBorderOutlined/>              
          </info>
        </div>
      </div>

      <div class="w-52 m-10 border rounded-lg bg-clip-border bg-gradient-to-tr from-red-500 via-yellow-400 to-blue-700">
        <div class="rounded-lg flex flex-col bg-white m-0.5">
          <div class="h-64 flex flex-col justify-center">
           <img class="m-3" src="https://bit.ly/3WgJIUe"/>
          </div>
          <info class="flex flex-row justify-center p-2 cursor-pointer">
            <ShoppingCartOutlined/>        
            <SearchOutlined/>        
            <FavoriteBorderOutlined/>              
          </info>
        </div>
      </div>

      <div class="w-52 m-10 border rounded-lg bg-clip-border bg-gradient-to-tr from-red-500 via-yellow-400 to-blue-700">
        <div class="rounded-lg flex flex-col bg-white m-0.5">
          <div class="h-64 flex flex-col justify-center">
           <img class="m-0" src="https://bit.ly/3YG0Rsb"/>
          </div>
          <info class="flex flex-row justify-center p-2 cursor-pointer">
            <ShoppingCartOutlined/>        
            <SearchOutlined/>        
            <FavoriteBorderOutlined/>              
          </info>
        </div>
      </div>

      <div class="w-52 m-10 border rounded-lg bg-clip-border bg-gradient-to-tr from-red-500 via-yellow-400 to-blue-700">
        <div class="rounded-lg flex flex-col bg-white m-0.5">
          <div class="h-64 flex flex-col justify-center">
           <img class="m-3" src="https://bit.ly/3Y4jyp7"/>
          </div>
          <info class="flex flex-row justify-center p-2 cursor-pointer">
            <ShoppingCartOutlined/>        
            <SearchOutlined/>        
            <FavoriteBorderOutlined/>              
          </info>
        </div>
      </div>

      <div class="w-52 m-10 border rounded-lg bg-clip-border bg-gradient-to-tr from-red-500 via-yellow-400 to-blue-700">
        <div class="rounded-lg flex flex-col bg-white m-0.5">
          <div class="h-64 flex flex-col justify-center">
           <img class="m-3" src="https://bit.ly/3jmZZZu"/>
          </div>
          <info class="flex flex-row justify-center p-2 cursor-pointer">
            <ShoppingCartOutlined/>        
            <SearchOutlined/>        
            <FavoriteBorderOutlined/>              
          </info>
        </div>
      </div>
       
    </container>
  )
}

export default Product