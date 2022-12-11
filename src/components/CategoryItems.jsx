import React from "react";

const CategoryItems = () => {
  return (
    <container class="flex grid-cols-3 py-12">
        <card1 
          class="flex flex-col justify-between mx-12 shadow-sm shadow-teal-900 px-6 bg-slate-100 rounded-lg">
          <img src="https://bit.ly/3Uy8Ap7" class="h-96"/>
          <p class="text-xl text-teal-900 font-extrabold mx-auto py-2">
            1st Card
          </p>
          <p class="text-center px-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga
            blanditiis voluptate a, quam voluptatibus exercitationem tenetur
            beatae earum dolorum?
          </p>
    
          <button class="rounded-full felx justify-center p-2 bg-slate-300 text-center mx-auto mt-2 mb-4 text-slate-800 hover:shadow-md hover:shadow-black active:{shadow-md shadow-black}">
            Shop Now
          </button>
        </card1>
    
      <card2 class="flex flex-col justify-between mx-12 shadow-sm shadow-teal-900 px-6 bg-slate-100 rounded-lg">
        <img src="https://bit.ly/3VZBUpo"  class="h-96" />
        <p class="text-xl text-teal-900 font-extrabold mx-auto py-2">
          2nd Card
        </p>
        <p class="text-center px-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga
          blanditiis voluptate a, quam voluptatibus exercitationem tenetur
          beatae earum dolorum?
        </p>

        <button class="rounded-full felx justify-center p-2 bg-slate-300 text-center mx-auto mt-2 mb-4 text-slate-800 hover:shadow-md hover:shadow-black">
          Shop Now
        </button>
      </card2>

      <card3 class="flex flex-col justify-between mx-12 shadow-sm shadow-teal-900 px-6 bg-slate-100 rounded-lg">
        <img src="https://bit.ly/3VVrZRV"  class="h-96"/>
        <p class="text-xl text-teal-900 font-extrabold mx-auto py-2">
          3rd Card
        </p>
        <p class="text-center px-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga
          blanditiis voluptate a, quam voluptatibus exercitationem tenetur
          beatae earum dolorum?
        </p>

        <button class="rounded-full felx justify-center p-2 bg-slate-300 text-center mx-auto mt-2 mb-4 text-slate-800 hover:shadow-md hover:shadow-black">
          Shop Now
        </button>
      </card3>
    </container>
  );
};

export default CategoryItems;
