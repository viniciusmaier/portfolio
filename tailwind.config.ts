import { transform } from "next/dist/build/swc";
import { BiFontFamily } from "react-icons/bi";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "100": "100rem",
      },
      height: {
        "55": "55rem",
      },
      colors: {
        "midnight-blue": "#0a1816",
        "deep-jungle-green": "hsla(170,51%,53%,1)",
      },
      fontFamily: {
        custom: ["Arial", "Verdana", "sans-serif"], // Definindo fontes customizadas
      },

      fontSize: {
        letterRgb: "55px",
      },

      keyframes: {
        // move-persona
        personaMove: {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-50px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        rgb: {
          "0%": {
            color: "#F22786",
          },
          "25%": {
            color: "#468C8C",
          },
          "50%": {
            color: "#050D0C",
          },
          "75%": {
            color: "#568C1F",
          },
          "100%": {
            color: "#95D930",
          },
        },
      },
      //RGB -- Letter
      animation: {
        personaMove: "personaMove 5s ease-in-out infinite",
        rgbLetter: "rgb 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
