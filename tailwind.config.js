/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#e50914", // Netflix-like red accent color
        background: "#141414",
      },
    },
  },
  plugins: [],
};
