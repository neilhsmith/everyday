import theme from "./src/styles/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...theme,
  },
  plugins: [mobileContainer],
}

function mobileContainer({ addComponents }) {
  addComponents({
    ".container": {
      maxWidth: "100%",
      paddingLeft: "6px",
      paddingRight: "6px",
      "@screen lg": {
        maxWidth: "764px",
        paddingLeft: "0",
        paddingRight: "0",
      },
    },
  })
}
