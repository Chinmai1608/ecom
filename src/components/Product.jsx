import { Circle, FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { Icon } from '@mui/material'
import React from 'react'

const Product = () => {
  return (
    <container class="flex flex-row flex-1 px-5  flex-wrap">
        
         <div class=" w-48  m-10 hover:  "> 
          <div class="flex flex-col w-48 -z-10  ">  
            <div  class="h-80 flex flex-col justify-center z-0 hover:opacity-60  ">   
              <img src="https://bit.ly/3uBidZm"/>
            </div>
            <info class=" hover:flex hidden flex-row justify-center cursor-pointer z-10">
              <ShoppingCartOutlined/>        
              <SearchOutlined/>        
              <FavoriteBorderOutlined/>              
            </info>
          </div>
        </div>

        <div class="flex flex-col w-48 m-10">
          <div class="h-80 flex flex-col justify-center">
           <img src="https://bit.ly/3uFzGQl"/>
          </div>
          <info class="flex flex-row justify-center p-2 cursor-pointer">
            <ShoppingCartOutlined/>        
            <SearchOutlined/>        
            <FavoriteBorderOutlined/>              
          </info>
        </div>

        <div class="flex flex-col w-48 m-10">
          <div class="h-80 flex flex-col justify-center">
           <img src="https://bit.ly/3FD2Mqa"/>
          </div>
          <info class="flex flex-row justify-center p-2 cursor-pointer">
            <ShoppingCartOutlined/>        
            <SearchOutlined/>        
            <FavoriteBorderOutlined/>              
          </info>
        </div>

        <div class="flex flex-col w-48 m-10">
          <div class="h-80 flex flex-col justify-center">
           <img src="https://bit.ly/3uxm8X5"/>
          </div>
          <info class="flex flex-row justify-center p-2 cursor-pointer">
            <ShoppingCartOutlined/>        
            <SearchOutlined/>        
            <FavoriteBorderOutlined/>              
          </info>
        </div>

        <div class="flex flex-col w-48 m-10">
          <div class="h-80 flex flex-col justify-center">
           <img src="https://bit.ly/3HgUUM8"/>
          </div>
          <info class="flex flex-row justify-center p-2 cursor-pointer">
            <ShoppingCartOutlined/>        
            <SearchOutlined/>        
            <FavoriteBorderOutlined/>              
          </info>
        </div>

        <div class="flex flex-col w-48 m-10">
          <div class="h-80 flex flex-col justify-center">
           <img src="https://bit.ly/3FBOoOT"/>
          </div>
          <info class="flex flex-row justify-center p-2 cursor-pointer">
            <ShoppingCartOutlined/>        
            <SearchOutlined/>        
            <FavoriteBorderOutlined/>              
          </info>
        </div>

        <div class="flex flex-col w-48 m-10">
          <div class="h-80 flex flex-col justify-center">
           <img src="https://bit.ly/3Y4jyp7"/>
          </div>
          <info class="flex flex-row justify-center p-2 cursor-pointer">
            <ShoppingCartOutlined/>        
            <SearchOutlined/>        
            <FavoriteBorderOutlined/>              
          </info>
        </div>

        <div class="flex flex-col w-48 m-10">
          <div class="h-80 flex flex-col justify-center">
           <img src="https://bit.ly/3FBKPs0"/>
          </div>
          <info class="flex flex-row justify-center p-2 cursor-pointer">
            <ShoppingCartOutlined/>        
            <SearchOutlined/>        
            <FavoriteBorderOutlined/>              
          </info>
        </div>

       
    </container>
  )
}

export default Product