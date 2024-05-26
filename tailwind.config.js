/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: 'hsl(36, 100%, 99%)',
        orange: 'hsl(35, 77%, 62%)',
        red: 'hsl(5, 85%, 63%)',
        grey: 'hsl(233, 8%, 79%)',
        darkgrey : 'hsl(236, 13%, 42%)',
        blue: 'hsl(240, 100%, 5%)'
      }
    },
  },
  plugins: [],
};
