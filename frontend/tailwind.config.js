/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        "playball": ["Playball"],
        "passion": ["Passion"],
        "robot": ["Robot"],
        "robot-bold": ["Robot-bold"],
         poppins: ['Poppins', 'sans-serif'],
  inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        slide: 'slide 20s linear infinite',
      },
      
    },
  },
  plugins: [],
};
