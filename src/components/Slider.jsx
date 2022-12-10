//import { Container } from '@mui/system'
import { Button, Container } from "@mui/material";
import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { click } from "@testing-library/user-event/dist/click";
//import styled from 'styled-components'
//
//const Arrow = Styled
import { useState } from "react";
import Product from "../pages/Product";

const Slider = () => {
    const [slideIndex, setslideIndex] = useState(0)
    const handleclick = (direction) => {};  
  return (
    <div class=" bg-teal-700 ">
      <div class="flex w-screen h-screen justify-center align-middle relative">
        
         <container class=" w-full">
          <div
            class="flex  h-screen "
            direction="left" onClick={() => handleclick("left")}
          >
           <div class="  cursor-pointer bg-slate-50 rounded-full top-0 bottom-0 m-auto ">
               
                <ArrowLeftOutlined />
              </div>  
           

            <wrapper class="flex transition-transform ease-linear h-full">
              <slide  class="flex justify-center w-full bg-gradient-to-tr from-teal-700  via-teal-100 to-teal-700">
                <image class="h-full flex-1 flex justify-center">
                  <img
                    class="m-4"
                    src="https://png.pngtree.com/png-clipart/20210310/original/pngtree-women-fashion-tie-bow-shirt-clipart-black-and-white-png-image_5970559.png"
                    
                  />
                </image>
                <info class="flex-1 flex flex-col">
                  <p class=" m-12 font-extrabold font-serif text-4xl flex justify-center">
                    SUMMER SALE
                  </p>

                  <desciption class="px-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia repellendus officiis eveniet obcaecati similique,
                    sit eos fugit ipsam quos quidem facilis corrupti architecto
                    totam minima adipisci, sint illo voluptatibus eaque magni
                    voluptates nihil esse voluptatem. Magni hic fugit, explicabo
                    asperiores id doloribus a eos aliquam cupiditate molestiae
                    aut at facilis totam minima adipisci, sint illo voluptatibus eaque magni
                    voluptates nihil esse voluptatem. Magni hic fugit, explicabo
                    asperiores id doloribus a eos aliquam cupiditate molestiae
                    aut at facilis.
                  </desciption>
                  <button class=" flex justify-center text-black  p-3 font-extrabold hover:text-white bg-gradient-to-tr from-teal-200 via-teal-600 to-teal-200 ring-1 ring-teal-800 hover:shadow-md hover:shadow-gray-700 mx-auto my-6 rounded-full">
                      <a href="./pages/Product"  > SHOP NOW</a>                      
                  </button>
                  
                </info>
              </slide>
               {/* <slide class="flex justify-center bg-blue-500 ">
                <image class="h-full flex-1">
                    <img class="h-4/5" src="https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551__340.png"/>
                </image>
                <info class="flex-1 px-32 flex-col">
                    
                    <p class=" m-12 font-extrabold font-serif text-3xl">Information</p>
                    
                    <desciption class="m-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus officiis eveniet obcaecati similique, sit eos fugit ipsam quos quidem facilis corrupti architecto totam minima adipisci, sint illo voluptatibus eaque magni voluptates nihil esse voluptatem. Magni hic fugit, explicabo asperiores id doloribus a eos aliquam cupiditate molestiae aut at facilis.
                    </desciption>
                    <Button>
                        <button 
                            class="flex justify-center text-black border-black p-3 font-extrabold hover:text-white bg-teal-700  rounded-full">
                            SHOP NOW
                        </button>
                    </Button>
                </info>
                            
              </slide>
                         <slide class="flex justify-center  bg-red-400">
                            <image class="h-full flex-1">
                                <img class="h-4/5" src="https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551__340.png"/>
                            </image>
                            <info class="flex-1 px-32 flex-col">
                                
                                    <p class=" m-12 font-extrabold font-serif text-3xl">Information</p>
                                
                                <desciption class="m-12">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus officiis eveniet obcaecati similique, sit eos fugit ipsam quos quidem facilis corrupti architecto totam minima adipisci, sint illo voluptatibus eaque magni voluptates nihil esse voluptatem. Magni hic fugit, explicabo asperiores id doloribus a eos aliquam cupiditate molestiae aut at facilis.
                                </desciption>
                                <Button>
                                    <button 
                                        class="flex justify-center text-black border-black p-3 font-extrabold hover:text-white bg-teal-700  rounded-full">
                                        SHOP NOW
                                    </button>
                                </Button>
                            </info>
                            
                        </slide> */}
            </wrapper>

            
          </div>
        </container>
       <div class=" cursor-pointer bg-slate-50 rounded-full top-0 bottom-0 m-auto flex justify-items-end">
            <div direction="right" onClick={() => handleclick("right")}>
              <ArrowRightOutlined />
            </div>
       </div> 
      </div>
    </div>
  );
};

export default Slider;
