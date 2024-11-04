/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: '#0989FF',
      topHeadingPrimary: "#010f1c",
      topHeadingSecondary: "#021d335",
      pink:"#FD4B6B",
    },

    container: {
      center: true,
      padding: "15px",
    },
  },
  plugins: [],
}

