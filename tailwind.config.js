/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'valorant': ['valorant'],
        'tungsten': ['tungsten'],
        'dinnext': ['dinnext'],
        'ffmark': ['ffmark'],
      },
      colors: {
        'val-nav': '#F9F9F9',
        'val-white': '#ECE8E1',
        'val-subblack': '#0F1923',
        'val-black': '#383E3A',
        'val-red': '#FF4655',
        'val-fade': '#768079',
      },
      backgroundColor: {
        'bg-valblack': '#111111',
        'bg-valwhite': '#ece8e1',
        'bg-valred': '#ff4655',
        'bg-valfadeblack': '#292929',
      }
    },
  },
  plugins: [],
}

