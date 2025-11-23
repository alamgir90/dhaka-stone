module.exports = {
  theme: {
    extend: {
      keyframes: {
        rotate360: {
          "0%":  { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" }
        },
      },
      animation: {
        rotate360: "rotate360 8s linear infinite",
      },
    },
  },
};
