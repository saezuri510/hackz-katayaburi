/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/features/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  plugins: [],
  theme: {
    extend: {
      backgroundColor: {
        fuchsia: {
          "925": "rgb(80 24 81)",
        },
      },
      fontFamily: {
        "nunito-sans": ["var(--font-nunito-sans--bold)"],
      },
    },
  },
};
