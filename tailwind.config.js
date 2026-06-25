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
        deep: "#07172a",
        mist: "#e8f0f7",
        mist2: "#dfe9f2",
        mist3: "#d7e4ef",
        panel: "#edf4f9",
        panelSoft: "#f4f8fb",
        edge: "#c5d4e2",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Segoe UI",
          "sans-serif",
        ],
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
