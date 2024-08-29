/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      },
      backgroundImage: {
          "black-gradient":
              "linear-gradient(to bottom, #060505, #333232)",
          "overview-gradient":
              "linear-gradient(to bottom, #060505, #787575)",
          "radial-gradient-gray":
              "radial-gradient(circle, #27272a, #191717)",
          "radial-gradient-blue":
              "radial-gradient(circle, #3b82f6, #2a54b2)",
      },
    },
  },
  plugins: [],
}

