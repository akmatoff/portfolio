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
      'primary': "#1f2321",
      'secondary': "#39453f",
      'primary-text': "#f8f8f8",
      "accent": "#4d7c65",
      "transparent": "rgba(0, 0, 0, 0)"
    },
  },
  plugins: [],
}

