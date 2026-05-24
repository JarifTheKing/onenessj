/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Add this line
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          // DEFAULT: "#4f46e5",
          DEFAULT: "#4f46e5",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#EC9232",
          foreground: "#ffffff",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        secondary: "0 10px 20px rgba(236, 146, 50, 0.2)",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #4f46e5, #6366f1)",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
      },
    },
  },
  plugins: [],
};
