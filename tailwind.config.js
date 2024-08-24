/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Vermillion':'#E34234',
        'WhiteSmoke':'#F5F5F5',
        'mintCream':'#F5FFFA',
      },
      fontFamily:{
        'Poppins':['Poppins'],
      },
      backgroundImage:{
        'bgBanner':"url('/public/bg_banner.svg')",
      },
      keyframes: {
        'move': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        'Move': 'move 20s linear infinite',
      },
    },
  },
  plugins: [],
}
