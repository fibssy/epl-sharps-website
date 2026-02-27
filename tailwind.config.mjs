/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#e94560',
          cyan: '#00d4ff',
          navy: '#0f3460',
          darknavy: '#16213e',
          dark: '#1a1a2e',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
