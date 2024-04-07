import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
   extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          main: "#1565C0", // deep blue
        },
        secondary: {
          main: "#78909C", // cool grey
        },
        success: {
          main: "#388E3C", // strong green
        },
        danger: {
          main: "#C62828", // deep red
        },
        warning: {
          main: "#F9A825", // bright yellow
        },
        info: {
          main: "#0277BD", // bright blue
        },
        light: {
          main: "#CFD8DC", // light grey
        },
        dark: {
          main: "#263238", // dark grey
        },
        white: {
          main: "#ffffff", // White
        },
        black: {
          main: "#000000", // Black
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config