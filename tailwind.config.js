/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1280px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: "#F0673C",
        dark: "#14191D",
        light: "#F2EEE3",
        yellow: "#F7DE6B",
        brown: "#3E1A1A",
        salmon: "#F98554",
        darkGreen: "#163011",
        beige: "#C99B6A",
        gold: "#FAC400",
        lightGray: "#E7EFF1",
      },
    },
  },
  plugins: [],
};
