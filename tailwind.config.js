/** @type {import('tailwindcss').Config} */
// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#059669',   // emerald-600
        secondary: '#0284c7', // sky-600
        accent: '#84cc16',    // lime-500
        dark: '#0f172a',      // slate-900
        light: '#f8fafc',     // slate-50
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
