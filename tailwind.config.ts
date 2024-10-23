import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#272829",
        primary: "#000000",
        grey: "#6B6B6B",
        "light-grey": "#667085",
        "primary-dark": "#111029",
        black: "#000000",
        "dark-grey": "#02010F",
        "grey-scale": "#F3F4F6",
        "half-whiite": "#CCCCCC",
        "grey-100": "#687580",
        "purple-lite": "#F9F9FD",
        "grey-half": "#EFEFEF",
        'half-whitesh': '#FCFCFC',
      },
      boxShadow: {
        "custom-button": "5px 10px 30px 0px #4C40F74D",
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          sm: "600px",
          md: "700px",
          lg: "900px",
          xl: "1240px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
