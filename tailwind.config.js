module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Configure your color palette here
      primaryFill: "#000000",
      primaryText: "#FFFFFF",
      primaryHover: "#333333",
      primaryActive: "#545454",
      secondaryFill: "#EEEEEE",
      secondaryText: "#000000",
      secondaryHover: "#E2E2E2",
      secondaryActive: "#CBCBCB",
      disableFill: "#F6F6F6",
      disableText: "#AFAFAF",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
