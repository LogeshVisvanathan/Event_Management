/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Very light background
        shell: "#f4f6fb",        // soft off-white / blue

        // Re-mapped (NO pink now)
        blush: "#c5e3ff",        // light sky blue
        lilac: "#d7ddff",        // soft lavender blue
        aqua: "#b8f2e6",         // mint / aqua

        ink: "#151827",
        softGray: "#7c8195",
      },
      boxShadow: {
        glow: "0 20px 60px rgba(80, 130, 255, 0.35)",
        card: "0 18px 45px rgba(15,23,42,0.12)",
      },
      borderRadius: {
        xl2: "1.7rem",
      },
    },
  },
  plugins: [],
};
