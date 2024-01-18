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
      'primary': "#141416",
      'secondary': "#302e35",
      'highlight': "#3f3c46",
      'primary-text': "#f3f3f3",
      "secondary-text": "#b4b4b4",
      "accent": "#83bd59",
      "transparent": "rgba(0, 0, 0, 0)"
    },
  },
  plugins: [],
}

