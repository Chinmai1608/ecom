/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}"
  ],
  plugins: [],
  theme: {
    extend: {
      padding: {
        10.5: "50px"
      }
    }
  },



 theme: {
   extend: {
     backgroundImage: {
       img: "url('https://thumbs.dreamstime.com/b/photo-portrait-big-family-small-kids-carrying-shopping-bags-isolated-vivid-teal-colored-background-205760535.jpg')",
       womens: "url('https://bit.ly/3v91Xzc')",
       mens :"url('https://bit.ly/3WE0EnH')",
       kids: "url('https://bit.ly/3Wl0MZp')"
     }
     
   }
 }


};
