import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satochi: ["Satochi"],
        integral: ["IntegralCF"],
      },
      screens: {
        xs: "390px",
      },
      width: {
        84: "22.375rem",
      },
      backgroundColor: {
        main: '#F2F0F1',
        secondary: '#F0F0F0',
        tertiary: '#F0EEED',
      },
      colors: {
        star: '#FFC633'
      },
    },
  },
  plugins: [],
};
