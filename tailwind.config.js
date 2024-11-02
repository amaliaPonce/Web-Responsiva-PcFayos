/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['"DM Sans"', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#151B31',
        secondary: '#BE1622',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
