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
        tag: "h1",
        fontSize: [48, 40],
        fontWeight: 700,
        lineHeight: ["52px", "44px"],
        letterSpacing: "-1.2px",
        fontFamily: fontFamilies.heading
      },
      largeHeading: {
        tag: "h2",
        fontSize: [40, 32],
        lineHeight: ["44px", "36px"],
        fontWeight: 700,
        letterSpacing: "-1px",
        fontFamily: fontFamilies.heading
      },
      mediumHeading: {
        tag: "h3",
        fontSize: [32, 24],
        fontWeight: 700,
        lineHeight: ["36px", "28px"],
        letterSpacing: "-0.8px",
        fontFamily: fontFamilies.heading
      },
      smallHeading: {
        tag: "h4",
        fontSize: [24, 20],
        fontWeight: 700,
        lineHeight: ["28px", "24px"],
        letterSpacing: "-0.6px",
        fontFamily: fontFamilies.heading
      },
      xsHeading: {
        tag: "h5",
        fontWeight: 700,
        fontSize: [20, 18],
        lineHeight: ["24px", "22px"],
        fontFamily: fontFamilies.heading
      },
      subHeading: {
        tag: "h6",
        fontWeight: 700,
        fontSize: [16, 16],
        lineHeight: ["20px", "20px"],
        fontFamily: fontFamilies.heading
      },
      bodyMain: {
        tag: "p",
        fontWeight: 400,
        fontSize: [16, 16],
        lineHeight: ["24px", "24px"],
        fontFamily: fontFamilies.body
      }
    },
    fontSizes: [16, 18, 20, 24, 32, 40, 48],
    breakpoints: ["319px", "599px"],
    colours: {
      ...colours
    }
};

export default globalComponents;
  