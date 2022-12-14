/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
  './pages/**/*.{js,ts,jsx,tsx,html}',
  './components/**/*.{js,ts,jsx,tsx,html}',],
  theme: {
   
    extend: { padding: {
      '10.5': '50px',
    }

    
  },
  },

  theme: {
   
    extend: { 
      flex: {
      '3': '3 3 0%'
    }

    
  },
  },
  
  plugins: [],
  theme:{
   extend:{   
    backgroundImage:{
        'img':"url('https://thumbs.dreamstime.com/b/photo-portrait-big-family-small-kids-carrying-shopping-bags-isolated-vivid-teal-colored-background-205760535.jpg')"
      }}
  }


}