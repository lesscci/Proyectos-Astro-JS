/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,astro}', // Rutas donde Tailwind buscará clases CSS
    './components/**/*.{html,js,astro}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
