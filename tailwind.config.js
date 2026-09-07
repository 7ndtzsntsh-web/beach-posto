module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060D17",
          900: "#0B192C",
          800: "#132742",
          700: "#1E3E62",
          600: "#2B568A"
        },
        beach: {
          blue: "#0055A5",
          royal: "#003E7E",
          sky: "#38BDF8",
          red: "#E31B23",
          darkred: "#C01018",
          yellow: "#FFC72C",
          sun: "#F59E0B",
          gold: "#D97706"
        },
        sand: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1"
        }
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        sans: ["Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"]
      },
      borderRadius: {
        "card": "1.5rem",
        "pill": "9999px"
      }
    }
  },
  plugins: []
};
