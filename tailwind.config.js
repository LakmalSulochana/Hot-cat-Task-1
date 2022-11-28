const {screens} = require("tailwindcss/defaultTheme");

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    screens:{
      t1:"768px",
      t2:"1024px",
      lp:"1440px",

      ...screens
    },
    extend: {
      backgroundImage: {
        'imageOne': "url('assets/img/_Family-Square-6x6-E-FINAL_7th-Mar 4.png')",
        'futureTalk': "url('src/assets/img/Now you have a better understanding of your financial requiremnts of your future.png')",
        'family':"url('assets/img/family.png')",
        'logo1':"url('assets/icn/logo1.png')",
        '20x':"url('src/assets/icn/new.png')",
        'artwork':"url('assets/img/family1.png')",
        '15present':"url('assets/icn/15present.png')",
        '65present':"url('assets/icn/65present.png')",
        'edit':"url('assets/icn/editIcn.png')",
        'share':"url('assets/icn/shareIcn.png')",
        'smartLife':"url('assets/img/smartLife.png')",
        '25present':"url('assets/icn/25present)",
        'helthImg':"url('assets/img/helthImg.png')",
        'ruwanImg':"url('assets/img/ruwanImg.png')",
        '85present':"url('assets/icn/85present.png')",
        'last':"url('assets/img/last.png')",
        'helth':"url('assets/icn/helth.png')",
        'defend':"url('assets/icn/defend.png')"



        
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
