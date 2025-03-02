/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
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
        },
        "primary-green": "rgb(0, 246, 94)", // #00f65e
        "primary-yellow": "rgb(241, 245, 92)", // #f1f55c
        dark: "#121212",
        light: "#ffffff",
        gray: "#f5f5f5",
        "gray-dark": "#333333",
        "gray-light": "#eeeeee",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, rgb(0, 246, 94) 0%, rgb(241, 245, 92) 100%)",
        "gradient-dark": "linear-gradient(135deg, var(--dark) 0%, var(--gray-dark) 100%)",
      },
      boxShadow: {
        "sm": "0 2px 10px rgba(0, 0, 0, 0.1)",
        "md": "0 5px 15px rgba(0, 0, 0, 0.1)",
        "lg": "0 15px 30px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        "sm": "5px",
        "md": "10px",
        "lg": "20px",
        "full": "30px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} 