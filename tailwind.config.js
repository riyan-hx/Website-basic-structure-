/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fixed-1fr': '120px 1fr', // Fixed width for the first column, 1fr for the second
      },
      height: {
        '471': '471px',
        '213': '213px', // Custom height value
      },
    },
  },
  plugins: [],
}

