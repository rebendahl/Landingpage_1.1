/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        "gray-dark": "#161616",
        gray: "#333",
        "gray-light": "#ccc",
      },
      fontFamily: {
        anonymous: ['"Anonymous Pro"'],
      },
    },
  },
  plugins: [],
};
