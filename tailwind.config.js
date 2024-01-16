/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "avatar": "url('assets/photo.jpg')"
      }
    },
    colors: {
      'primary': "#f8f8f8",
      'secondary': "#c1c8c6",
      'primary-text': "#2e3735",
      "accent": "#537564",
      "transparent": "rgba(0, 0, 0, 0)"
    },
  },
  plugins: [],
}

