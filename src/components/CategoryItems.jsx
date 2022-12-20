import React from "react";

const CategoryItems = () => {
  return (
    <container class="md:flex md:grid-cols-3 p-8 sm:grid sm:grid-cols-1 ">
        <card1 
          class="flex flex-col justify-between mx-4 my-4 shadow-sm shadow-teal-900 px-6 bg-slate-100 rounded-lg">
          <img src="https://bit.ly/3WqCyN1" class="h-96"/>
          <p class="text-xl text-teal-900 font-extrabold mx-auto py-2">
            MEN'S
          </p>
          <p class="text-center px-6 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga
            blanditiis voluptate a, quam voluptatibus exercitationem tenetur
            beatae earum dolorum?
          </p>
    
          <a href="../ProductList" 
           class=" rounded-full felx justify-center p-2 bg-slate-300 text-center mx-auto mt-2 mb-4 text-slate-800 hover:shadow-sm active:shadow-inner active:shadow-black hover:shadow-black">
            Shop Now
          </a>
        </card1>
    
      <card2 class="flex flex-col justify-between mx-4 my-4 shadow-sm shadow-teal-900 px-6 bg-slate-100 rounded-lg">
        <img src="https://bit.ly/3jdm3pc"  class="h-96" />
        <p class="text-xl text-teal-900 font-extrabold mx-auto py-2">
          KID'S
        </p>
        <p class="text-center px-6 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga
          blanditiis voluptate a, quam voluptatibus exercitationem tenetur
          beatae earum dolorum?
        </p>

        <a href="../ProductList" 
         class="rounded-full felx justify-center p-2 bg-slate-300 text-center mx-auto mt-2 mb-4 text-slate-800 hover:shadow-sm active:shadow-inner active:shadow-black hover:shadow-black">
          Shop Now
        </a>
      </card2>

      <card3 class="flex flex-col justify-between mx-4 my-4 shadow-sm shadow-teal-900 px-6 bg-slate-100 rounded-lg">
        <img src="https://bit.ly/3YyhN3T"  class="h-96"/>
        <p class="text-xl text-teal-900 font-extrabold mx-auto py-2">
          WOMEN'S
        </p>
        <p class="text-center px-6 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga
          blanditiis voluptate a, quam voluptatibus exercitationem tenetur
          beatae earum dolorum?
        </p>

        <a href="../ProductList" 
          class="rounded-full felx justify-center p-2 bg-slate-300 text-center mx-auto mt-2 mb-4 text-slate-800 hover:shadow-sm active:shadow-inner active:shadow-black hover:shadow-black">
          Shop Now
        </a>
      </card3>
    </container>
  );
};

export default CategoryItems;
