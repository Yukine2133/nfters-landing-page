import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        purple: {
          "1": "#3D00B7",
          "2": "#371C87",
          "3": "#220970",
          "4": "#4F33A3",
          "5": "#5539A8",
        },

        gray: {
          "1": "#220970",
          "2": "#3A3A3A",
          "3": "#565656",
          "4": "#757575",
          "5": "#696969",
          "6": "#636363",
          "7": "#363639",
          "8": "#DCDCDC",
          "9": "#A4A4A4",
          "10": "#C0C0C0",
        },
        green: {
          "1": "#00AC4F",
          "2": "#14C8B0",
        },
        red: "#FF002E",
        blue: "#2639ED",
      },
    },
  },
  plugins: [],
};
export default config;
