/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //add paths to my templates gemini
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A8A", // Indigo 800
          light: "#3B82F6", // Blue 500
        },
        accent: {
          green: "#10B981", // Green 500
          yellow: "#F59E0B", // Yellow 500
        },
        neutral: {
          dark: "#374151", // Gray 700
          medium: "#6B7280", // Gray 500
          light: "#F3F4F6", // Gray 100
          white: "#FFFFFF", // White
        },
        success: "#22C55E", // Green 600
        warning: "#EAB308", // Yellow 500
        error: "#EF4444", // Red 500
      },
    },
    fontFamily: {
    playwrite: ["Playwrite AR", "serif"], // Assuming you want Playwrite AR as a serif
    poppins: ["Poppins", "sans-serif"],
    rubik: ["Rubik", "sans-serif"],
    }
  },
  plugins: [],
};
