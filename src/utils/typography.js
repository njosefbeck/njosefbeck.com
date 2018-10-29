import Typography from "typography";

const typography = new Typography({
  title: "njosefbeck.com",
  baseLineHeight: "1.1",
  googleFonts: [
    {
      name: "Playfair Display",
      styles: [
        "400",
        "700",
        "900",
      ]
    },
  ],
  headerFontFamily: ["Playfair Display", "serif"],
  bodyFontFamily: ["Playfair Display", "serif"],
  headerWeight: "900",
});

export default typography;