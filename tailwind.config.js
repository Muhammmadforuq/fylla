/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        satoshi:['Satoshi'],
        "roboto-mono":['Roboto Mono'],
        syne:['Syne'],
      },
      fontSize:{
        80:"5rem"
      },
      maxWidth:{
        xxl:"111.5rem"
      },

      colors:{
        brand:{
          black:"#191919",
          gray:"#fdfbf5",
        }
      }
    },
  },
  plugins: [],
}

