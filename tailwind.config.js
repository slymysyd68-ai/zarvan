/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.25rem", screens: { "2xl": "1280px" } },
    extend: {
      fontFamily: { sans: ["Vazirmatn", "system-ui", "sans-serif"] },
      colors: {
        ink: { DEFAULT: "#0E1A2B", 700: "#1B2A3F", 500: "#3A4B63", 300: "#7E8CA0" },
        brass: { DEFAULT: "#B8892B", dark: "#966F1F", light: "#E5D2A6", tint: "#FAF5E9" },
        sand: { DEFAULT: "#F7F6F3", 200: "#EDEBE6" },
      },
      borderRadius: { xl: "0.875rem", "2xl": "1.125rem" },
      boxShadow: {
        card: "0 1px 2px rgba(14,26,43,.04), 0 8px 24px -12px rgba(14,26,43,.12)",
        lift: "0 2px 4px rgba(14,26,43,.05), 0 18px 40px -18px rgba(14,26,43,.22)",
      },
    },
  },
  plugins: [],
};
