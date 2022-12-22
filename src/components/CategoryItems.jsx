import React from "react";

const CategoryItems = () => {
  return (
    <container class="md:flex md:grid-cols-3 p-8 sm:grid sm:grid-cols-1 justify-center">
        <card1 
          class="md:w-1/4 md:h-96 bg-mens bg-no-repeat bg-cover bg-center flex flex-col justify-center mx-8 my-4 shadow-sm shadow-teal-900 px-6 bg-slate-100 rounded-lg">
          <div class="flex flex-col bg-opacity-50 bg-white md:h-full justify-between py-8 -m-3 h-96">
            <p class="text-3xl font-serif text-center">
              <div class="text-transparent bg-clip-text bg-gradient-to-b from-teal-900 via-slate-700 to-slate-900">
                MEN'S WEAR
              </div>
            </p>
            <p class="text-center text-base m-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga
              blanditiis voluptate a, quam voluptatibus exercitationem tenetur
              beatae earum dolorum?
            </p>

            <a href="../ProductList" 
             class="font-bold font-serif rounded-full p-2 bg-slate-200 text-center text-slate-800 hover:shadow-sm mx-auto  active:shadow-inner active:shadow-black hover:shadow-black">
              SHOP NOW
            </a>
          </div>
        </card1>
    
      <card2 
        class="md:w-1/4 md:h-96 bg-kids bg-no-repeat bg-cover bg-center flex flex-col justify-center mx-8 my-4 shadow-sm transition-shadow shadow-teal-900 px-6 bg-slate-100 rounded-lg">
       
      <div class="flex flex-col bg-opacity-50 bg-white md:h-full justify-between py-8 -m-3 h-96">
            <p class="text-3xl font-serif text-center ">
              <div class="text-transparent bg-clip-text bg-gradient-to-b from-teal-900 via-slate-700 to-slate-900">
                KID'S WEAR
              </div>
            </p>
            <p class="text-center text-base m-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga
              blanditiis voluptate a, quam voluptatibus exercitationem tenetur
              beatae earum dolorum?
            </p>

            <a href="../ProductList" 
             class="font-bold font-serif rounded-full p-2 bg-slate-200 text-center mx-auto  text-slate-800 hover:shadow-sm active:shadow-inner active:shadow-black hover:shadow-black">
              SHOP NOW
            </a>
          </div>
      </card2>

      <card3 class="md:w-1/4 md:h-96 bg-womens bg-no-repeat bg-cover bg-center flex flex-col justify-center mx-8 my-4 shadow-sm shadow-teal-900 px-6 bg-slate-100 rounded-lg">
        
      <div class="flex flex-col bg-opacity-70 bg-white md:h-full justify-between py-8 -m-3 h-96">
            <p class="text-3xl font-serif text-center">
              <div class="text-transparent bg-clip-text bg-gradient-to-b from-teal-900 via-slate-700 to-slate-900">
                WOMEN'S WEAR
              </div>
            </p>
            <p class="text-center text-base m-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga
              blanditiis voluptate a, quam voluptatibus exercitationem tenetur
              beatae earum dolorum?
            </p>

            <a href="../ProductList" 
             class="font-bold font-serif rounded-full p-2 bg-slate-200 text-center mx-auto  text-slate-800 hover:shadow-sm active:shadow-inner active:shadow-black hover:shadow-black">
              SHOP NOW
            </a>
          </div>
      </card3>
    </container>
  );
};

export default CategoryItems;
