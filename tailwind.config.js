/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f6fd1", // Zorbius Blau
        accent:  "#1ecfe3", // Zorbius Türkis
        wine:    "#6a2b3b", // Zorbius Weinrot
        ink:     "#0e1116", // dunkles Grau
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,.08)" },
    },
  },
  plugins: [],
};
