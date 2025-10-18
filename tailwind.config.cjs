/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Earthy, warm palette for handmade crafts
        primary: {
          50: '#fdf2f0',
          100: '#fbe5e1',
          200: '#f6cfc7',
          300: '#efaca0',
          400: '#e57e6c',
          500: '#d9563f', // Terracotta primary
          600: '#c73e2a',
          700: '#a73123',
          800: '#8b2b21',
          900: '#732822',
        },
        accent: {
          50: '#f6f7f0',
          100: '#e9ecdc',
          200: '#d4dabb',
          300: '#b8c390',
          400: '#9dab6a',
          500: '#829549', // Muted green
          600: '#677637',
          700: '#515c2e',
          800: '#424a28',
          900: '#383f25',
        },
        neutral: {
          50: '#faf8f6',
          100: '#f2ede8',
          200: '#e8ddd2',
          300: '#dac7b5',
          400: '#c9ab91',
          500: '#b8906f', // Beige
          600: '#a67c5f',
          700: '#8b654f',
          800: '#715344',
          900: '#5c4539',
        },
      },
      fontFamily: {
        serif: ['Crimson Text', 'Georgia', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', 'system-ui', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'texture': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" patternUnits=\"userSpaceOnUse\" width=\"100\" height=\"100\"><circle cx=\"50\" cy=\"50\" r=\"0.5\" fill=\"%23000\" opacity=\"0.02\"/><circle cx=\"25\" cy=\"25\" r=\"0.3\" fill=\"%23000\" opacity=\"0.015\"/><circle cx=\"75\" cy=\"75\" r=\"0.4\" fill=\"%23000\" opacity=\"0.02\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};