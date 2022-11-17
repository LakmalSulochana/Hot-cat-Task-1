/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'imageOne': "url('assets/img/_Family-Square-6x6-E-FINAL_7th-Mar 4.png')",
        'futureTalk': "url('src/assets/img/Now you have a better understanding of your financial requiremnts of your future.png')",
        'family':"url('assets/img/family.png')"
        
      },fontFamily:{
        'roboto':"'Roboto Condensed', sans-serif",
        'inter':"'Inter', sans-serif",
        'open':"'Open Sans', sans-serif"
      },



    },
  },
  plugins: [],
}
