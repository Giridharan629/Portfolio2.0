/** @type {import('tailwindcss').Config} */

import tailwindScrolbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors:{
        light_gray: '#fbfbfe',
        blue: '#6E58E0',
        bluish_gray: '#ced0e5'
      },
      boxShadow: {
        customShadow: '0 10px 15px rgba(0, 0, 0, 1)',
        customGlow: '0 0 10px rgba(0, 255, 0, 0.5)',
      },
    },
  },
  plugins: [tailwindScrolbar],
};
