import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";


const Slider = () => {
  const [slideIndex, setslideIndex] = useState(0);
  const handleclick = (direction) => {
    if(direction === "left"){
      setslideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    } else {
      setslideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }
  };
  return (
    <div class=" bg-teal-700  md:h-full h-fit">
      <div class="flex w-screen md:h-screen h-min justify-center align-middle relative">
        <container class=" w-full flex flex-row h-full">
          <div class=" cursor-pointer bg-slate-50 rounded-full top-0 bottom-0 m-auto flex justify-items-end">
            <div direction="left" onClick={() => handleclick("left")}>
              <ArrowLeftOutlined />
            </div>
          </div>

          <wrapper slideIndex class="flex transition-transform translate-x-screen ease-linear h-min md:h-full ">
            <slide class="h-min md:h-full flex justify-center md:w-full bg-gradient-to-tr from-teal-700  via-teal-100 to-teal-700">
              <div class="grid grid-cols-1 md:grid-cols-2 h-min">
                <image class="h-min flex flex-col m-4 justify-center">
                  <img
                    class="p-6"
                    src="https://png.pngtree.com/png-clipart/20210310/original/pngtree-women-fashion-tie-bow-shirt-clipart-black-and-white-png-image_5970559.png"
                  />
                </image>
                <info class="flex flex-col justify-center">
                  <p class=" md:m-12 m-4 font-extrabold font-serif md:text-4xl text-3xl flex justify-center">
                    SUMMER SALE
                  </p>

                  <desciption class="px-10 md:py-6 py-0.5 md:text-xl text-md text-center">
                    DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW
                    ARRIVALS.
                  </desciption>
                  <button class=" flex justify-center text-black p-3 font-extrabold hover:text-white bg-gradient-to-tr from-teal-200 via-teal-600 to-teal-200 ring-1 ring-teal-800 hover:shadow-md hover:shadow-gray-700 mx-auto md:my-6 my-4 rounded-full">
                    <a href="./Product"> SHOP NOW</a>
                  </button>
                </info>
              </div>
            </slide>
          </wrapper>

          {/* <wrapper class="flex transition-transform translate-x-screen ease-linear h-min md:h-full ">
            <slide class="h-min md:h-full flex justify-center md:w-full bg-gradient-to-tr from-teal-700  via-teal-100 to-teal-700">
              <div class="grid grid-cols-1 md:grid-cols-2 h-min">
                <image class="h-min flex flex-col m-4 justify-center">
                  <img
                    class="p-6"
                    src="https://png.pngtree.com/png-clipart/20210310/original/pngtree-women-fashion-tie-bow-shirt-clipart-black-and-white-png-image_5970559.png"
                  />
                </image>
                <info class="flex flex-col justify-center">
                  <p class=" md:m-12 m-4 font-extrabold font-serif md:text-4xl text-3xl flex justify-center">
                    SUMMER SALE
                  </p>

                  <desciption class="px-10 md:py-6 py-0.5 md:text-xl text-md text-center">
                    DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW
                    ARRIVALS.
                  </desciption>
                  <button class=" flex justify-center text-black p-3 font-extrabold hover:text-white bg-gradient-to-tr from-teal-200 via-teal-600 to-teal-200 ring-1 ring-teal-800 hover:shadow-md hover:shadow-gray-700 mx-auto md:my-6 my-4 rounded-full">
                    <a href="./Product"> SHOP NOW</a>
                  </button>
                </info>
              </div>
            </slide>
          </wrapper> 

          <wrapper class="flex transition-transform translate-x-screen ease-linear h-min md:h-full ">
            <slide class="h-min md:h-full flex justify-center md:w-full bg-gradient-to-tr from-teal-700  via-teal-100 to-teal-700">
              <div class="grid grid-cols-1 md:grid-cols-2 h-min">
                <image class="h-min flex flex-col m-4 justify-center">
                  <img
                    class="p-6"
                    src="https://png.pngtree.com/png-clipart/20210310/original/pngtree-women-fashion-tie-bow-shirt-clipart-black-and-white-png-image_5970559.png"
                  />
                </image>
                <info class="flex flex-col justify-center">
                  <p class=" md:m-12 m-4 font-extrabold font-serif md:text-4xl text-3xl flex justify-center">
                    SUMMER SALE
                  </p>

                  <desciption class="px-10 md:py-6 py-0.5 md:text-xl text-md text-center">
                    DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW
                    ARRIVALS.
                  </desciption>
                  <button class=" flex justify-center text-black p-3 font-extrabold hover:text-white bg-gradient-to-tr from-teal-200 via-teal-600 to-teal-200 ring-1 ring-teal-800 hover:shadow-md hover:shadow-gray-700 mx-auto md:my-6 my-4 rounded-full">
                    <a href="./Product"> SHOP NOW</a>
                  </button>
                </info>
              </div>
            </slide>
          </wrapper> */}

          <div class=" cursor-pointer bg-slate-50 rounded-full top-0 bottom-0 m-auto flex justify-items-end">
            <div direction="right" onClick={() => handleclick("right")}>
              <ArrowRightOutlined />
            </div>
          </div>
        </container>
      </div>
    </div>
  );
};

export default Slider;
