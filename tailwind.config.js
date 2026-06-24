/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0e1a27",
        steel: "#444441",
        muted: "#5f5e5a",
        ash: "#888780",
        sand: "#f1efe8",
        line: "#d3d1c7",
        brand: {
          50: "#f3f8fd",
          100: "#dfeefd",
          300: "#85b7eb",
          500: "#378add",
          700: "#0c447c",
          900: "#082c52",
        },
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        panel: "0 24px 80px rgba(8, 44, 82, 0.12)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(12,68,124,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(12,68,124,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
