/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        nordTheme: {
          primary: "#8FBCBB",
          "primary-content": "#070d0d",
          secondary: "#81A1C1",
          "secondary-content": "#06090e",
          accent: "#434C5E",
          "accent-content": "#d6d8dd",
          neutral: "#2E3440",
          "neutral-content": "#d1d2d6",
          "base-100": "#ECEFF4",
          "base-200": "#cdd0d4",
          "base-300": "#afb1b5",
          "base-content": "#131415",
          info: "#EBCB8D",
          "info-content": "#130f07",
          success: "#A3BE8C",
          "success-content": "#0a0d07",
          warning: "#D08770",
          "warning-content": "#100604",
          error: "#BF616A",
          "error-content": "#0d0304",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
