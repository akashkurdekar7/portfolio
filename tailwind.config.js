/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Add paths to scan for Tailwind classes
  theme: {
    extend: {
      colors: {
        primary: "#B91646",
        bgc: "#FBF3E4",
      },
      fontFamily: {
        signature: ['"Brittany Signature"', "cursive"],
        bold: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
