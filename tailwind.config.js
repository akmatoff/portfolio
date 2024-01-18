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
      'primary': "#1f1f23",
      'secondary': "#4c4a58",
      'primary-text': "#f8f8f8",
      "accent": "#647db0",
      "transparent": "rgba(0, 0, 0, 0)"
    },
  },
  plugins: [],
}

