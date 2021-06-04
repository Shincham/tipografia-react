const colours = {
    darkLow: "rgba(0,0,0,0.44)",
    darkMedium: "rgba(0,0,0,0.60)",
    darkHigh: "rgba(0,0,0,0.80)",
    magenta: "#E63888",
    lightSolid: "#FFFFFF",
    lightHigh: "rgba(255,255,255,0.80)"
};
  
const fontFamilies = {
    heading: "Roboto, Poppins, Helvetica, Arial, sans-serif",
    body: "Roboto, PT Serif, Helvetica, Arial, sans-serif",
    code: "Roboto Mono, monospace"
};
  
const globalComponents = {
    textStyles: {
      display: {
        as: "h1",
        fontSize: [36, 40, 48],
        fontWeight: 700,
        lineHeight: ["40px", "44px", "52px"],
        letterSpacing: "-1.2px",
        fontFamily: fontFamilies.heading
      },
      largeHeading: {
        as: "h2",
        fontSize: [28, 32, 40],
        lineHeight: ["32px", "36px", "44px"],
        fontWeight: 700,
        letterSpacing: "-1px",
        fontFamily: fontFamilies.heading
      },
      mediumHeading: {
        as: "h3",
        fontSize: [24, 24, 32],
        fontWeight: 700,
        lineHeight: ["28px", "28px", "36px"],
        letterSpacing: "-0.8px",
        fontFamily: fontFamilies.heading
      },
      smallHeading: {
        as: "h4",
        fontSize: [20, 20, 24],
        fontWeight: 700,
        lineHeight: ["24px", "24px", "28px"],
        letterSpacing: "-0.6px",
        fontFamily: fontFamilies.heading
      },
      xsHeading: {
        as: "h5",
        fontWeight: 700,
        fontSize: [18, 18, 20],
        lineHeight: ["22px", "22px", "24px"],
        fontFamily: fontFamilies.heading
      },
      subHeading: {
        as: "h6",
        fontWeight: 700,
        fontSize: [16, 16, 16],
        lineHeight: ["20px", "20px", "20px"],
        fontFamily: fontFamilies.heading
      },
      bodyMain: {
        as: "p",
        fontWeight: 400,
        fontSize: [16, 16, 16],
        lineHeight: ["24px", "24px", "24px"],
        fontFamily: fontFamilies.body
      }
    },
    fontSizes: [16, 18, 20, 24, 28, 32, 36, 40, 48],
    breakpoints: ["319px", "599px"],
    colours: {
      ...colours
    }
};

export default globalComponents;
  