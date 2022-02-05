module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Adding colors like this is useful for hover effects and other variations of the colors
        primary: {
          50: '#f4eaff',
          100: '#dac1f1',
          200: '#c099e5',
          300: '#a671da',
          400: '#8d49ce',
          500: '#481d72',// primary main
          600: '#5a258d',
          700: '#401a66',
          800: '#270f3e',
          900: '#0f0319',
        },
        secondary: {
          50: '#dcffff',
          100: '#b5f7f7',
          200: '#8bf0f0',
          300: '#61eaea',
          400: '#3be4e4',
          500: '#16a7a7', // secondary color main
          600: '#159e9e',
          700: '#057171',
          800: '#004545',
          900: '#001919',
        },
      },
    }
  },
  plugins: [],
}