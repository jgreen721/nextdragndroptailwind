import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./reusables/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow:{
        waterfall:'1px 2px 4px blue',
        airplane:"1px 2px 2px gray",
        theme:'1px 1px 2px yellow'
      },
      boxShadow:{
        pressed:"1px -2px 4px rgba(0,10,10,.7) inset"
      },
      textColor:{
        main:'var(--mainColor)',
        secondary:'var(--secondaryColor)'
      },
      backgroundColor:{
        card:'var(--cardBg)',
        main:'var(--mainBg)',
        activecard:'var(--activeCardBg)'
      }
      
    },
  },
  plugins: [],
};
export default config;
