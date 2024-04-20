/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#EEF2F5",
        primary: "#172463",
        primaryHover: "#374AA6",
      },
    },
  },
  plugins: [],
};
