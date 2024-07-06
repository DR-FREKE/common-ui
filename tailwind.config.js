/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // reference the library only
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray01: "rgba(0,0,0,.32)",
        gray02: "rgba(0, 0, 0, .64)",
      },
    },
  },
  plugins: [],
};
