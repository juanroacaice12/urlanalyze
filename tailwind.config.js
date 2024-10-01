/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-slow': {
          '0%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.1)', opacity: '1.3' },
          '100%': { transform: 'scale(1)', opacity: '0.3' },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 5s infinite ease-in-out',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'landing-bg': '#01070F',
      'landing-blue': '#050A11',
      'custom-blue': '#00B0FF',
      'blue-card': '#0a1e2d',
      'blue-icon': '#103550',
      'border-footer': '#848184'
    },
  },
  plugins: [],
}
