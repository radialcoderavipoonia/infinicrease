/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/images/background/header.png')",
        footer: "url('/assets/images/background/footer_bg.webp')",
        byPump: "url('/assets/images/background/buy_pump.png')",
        getCard: "url('/assets/images/background/get_card.png')",
        pumpMode: "url('/assets/images/background/pumpMode-bg.webp')",
        stabilies: "url('/assets/images/background/stabilies-bg.webp')",
        roadmap: "url('/assets/images/background/roadmap.webp')",
        tokenShadow: "url('/assets/images/tokenomics/tokenomics.svg')",
        tokenIcon: "url('/assets/images/tokenomics/token.svg')",
      },
      boxShadow: {
        svg: "white 0px 0px 10px 2px",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Orbitron: ["Orbitron", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        NoFlickingThanks: ["NoFlickingThanks", "sans-serif"],
        plusSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "28px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "52px",
        "7xl": "70px",
      },
      backgroung: {
        "bg-100": "100% 100%",
      },
      colors: {
        cyanBlack: "#f9fbff",
        languidLavender: "#cfcfe8",
        tealishBlue: "#ccced8",
        greyCloud: "#b6bab1",
        TorchRed: "#FC1435",
        YellowOrange: "#FFAD00",
        pastelGray: "#CCCDD7",
        blueZodiac: "#191F4D",
        talishlavender: "#CCCFDF",
        pumpkinOrange: "#fe7115",
        gainsBoro: "#DDDDDD",
        deepCove: "#0E1648",
        greyGoose: "#CFD0DA",
        purpleBlue: "#D1D0D7",
      },
    },
  },
  plugins: [],
};
