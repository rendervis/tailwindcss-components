module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: {
      tickMarkFill: "#FFFFFF",
    },
    stroke: {
      tickMarkFill: "#FFFFFF",
    },
    colors: {
      /**buttonPrimary */
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
      /**checkbox*/
      tickFill: "#FFFFFF",
      tickFillHover: "#F6F6F6",
      tickFillActive: "#EEEEEE",
      tickFillSelected: "#000000",
      tickFillSelectedHover: "#333333",
      tickFillSelectedHoverActive: "#545454",
      tickFillError: "#FFEFED",
      tickFillErrorHover: "#FED7D2",
      tickFillErrorHoverActive: "#F1998E",
      tickFillDisabled: "#AFAFAF",
      tickBorder: "#757575",
      tickBorderError: "#E11900",
      tickMarkFill: "#FFFFFF",
      tickMarkFillError: "#FFFFFF",
      tickMarkFillDisabled: "#FFFFFF",
    },
    outline: {
      border: "3px solid #757575",
      checked: "3px solid #000000",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
