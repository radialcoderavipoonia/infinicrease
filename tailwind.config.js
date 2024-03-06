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
        hero: "url('/assets/images/background/hero.webp')",
        footer: "url('/assets/images/background/footer_bg.png')",
        byPump: "url('/assets/images/background/buy_pump.png')",
        getCard: "url('/assets/images/background/get_card.png')",
        pumpMode: "url('/assets/images/background/pumpMode-bg.webp')",
        stabilies: "url('/assets/images/background/stabilies-bg.webp')",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Orbitron: ["Orbitron", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        NoFlickingThanks: ["NoFlickingThanks", "sans-serif"],
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
      },
    },
  },
  plugins: [],
};
