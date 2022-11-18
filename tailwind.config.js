/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'imageOne': "url('assets/img/_Family-Square-6x6-E-FINAL_7th-Mar 4.png')",
        'futureTalk': "url('src/assets/img/Now you have a better understanding of your financial requiremnts of your future.png')",
        'family':"url('assets/img/family.png')",
        'logo1':"url('assets/icn/logo1.png')",
        '20x':"url('src/assets/icn/new.png')",
        'artwork':"url('assets/img/Artwork (1).png')",
        '15present':"url('assets/icn/15present.png')"


        
      },fontFamily:{
        'roboto':"'Roboto Condensed', sans-serif",
        'inter':"'Inter', sans-serif",
        'open':"'Open Sans', sans-serif",
        'openBold':"'Open Sans', sans-serif",
        'mont':"Montserrat', sans-serif"


      },



    },
  },
  plugins: [],
}
