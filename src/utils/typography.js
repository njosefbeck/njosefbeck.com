import Typography from "typography";

const typography = new Typography({
  title: "njosefbeck.com",
  baseLineHeight: "1.2",
  googleFonts: [
    {
      name: "Playfair Display",
      styles: [
        "400",
        "700",
        "900",
      ]
    },
    {
      name: "Roboto",
      styles: [
        "400",
        "700",
        "900",
      ]
    }
  ],
  headerFontFamily: ["Playfair Display", "serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
  headerWeight: "900",
});

export default typography;