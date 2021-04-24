const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors:{
    //   yellow:{
    //     light:"#FFFBEB",
    //     DEFAULT:"#fc8019",
    //     dark:"#78350F"

    //   }
    // },

    extend: {
      colors:{
        yellow:{
          "swiggy":"#fc8019"
        },
        green:{
          "swiggy":"#60b246"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
