/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': "#f8f8f8",
      'secondary': "#d1cfcf",
      'primary-text': "#2e3735",
      "accent": "#537564",
      "transparent": "rgba(0, 0, 0, 0)"
    },
  },
  plugins: [],
}

