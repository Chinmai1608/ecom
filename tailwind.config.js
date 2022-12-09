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
  plugins: [],
}