/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0f14",
        paper: "#f4f0e8",
        mist: "#dfe8e4",
        jade: "#23c78a",
        coral: "#ff6b4a",
        cobalt: "#3c6df0",
        amber: "#f2b84b"
      },
      fontFamily: {
        display: ["Instrument Serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        sharp: "0 28px 80px rgba(7, 12, 18, 0.28)"
      }
    }
  },
  plugins: []
};
