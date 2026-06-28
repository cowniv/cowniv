import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F4EFEB',
        bluePrimary: '#C7D9E5',
        blueSecondary: '#57808E',
        lightGray: '#7C7C7C',
      },
      height: {
        page: '1024px'
      },
      width: {
        page: '1440px'
      },
      fontFamily: {
        'DM-text': ["DM Sans", 'sans-serif']
      }
    },
  },
  plugins: [typography],
}

