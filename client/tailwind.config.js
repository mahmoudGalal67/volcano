/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': '#00070D',
        'yellow':'#FED831',
        "fade":' rgba(0, 0, 0, 0.58)',
        'dark-blue':'#0B0C19',
        'light-blue':'#252842',
        'light':'#C2C2C2',
        'dark':'#464343',
        'light-yellow':'#42412d',
        'gray':"rgba(255, 255, 255, 0.15)"
      },
      height: {
        '600': '600px',
      },
      fontSize: {
        "big":"96px",
      }
    },
    screens:{
      'toggle':'1165px',
      'sm':'640px',
      'md':'760px',
      'lg':'1024px',
      "890":"890px"
    },
  },
  plugins: [],
}
