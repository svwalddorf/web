/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "svw-blue": {
          lightest: "#2894c5",
          lighter: "#0686BD",
          default: "#057db1",
          darker: "#056B96",
          darkest: "#035070",
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
