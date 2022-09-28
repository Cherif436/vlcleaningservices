module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide', 'flowbite/plugin')
  ],
}
