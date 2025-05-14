/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        pulseSlow: 'pulse 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

  