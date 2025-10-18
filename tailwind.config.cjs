/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Indian flag inspired colors
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ff9933', // Indian flag saffron
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#138808', // Indian flag green
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Traditional Indian colors
        turmeric: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        terracotta: {
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
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce5ca',
          300: '#8dd1a8',
          400: '#5bb57f',
          500: '#138808', // Indian green
          600: '#10750b',
          700: '#0f5e0b',
          800: '#0e4a0a',
          900: '#0c3e0a',
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
        hindi: ['Noto Sans Devanagari', 'Inter', 'system-ui', ...defaultTheme.fontFamily.sans],
        decorative: ['Crimson Text', 'Playfair Display', 'Georgia', ...defaultTheme.fontFamily.serif],
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
        'mandala': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\"><defs><pattern id=\"mandala\" patternUnits=\"userSpaceOnUse\" width=\"40\" height=\"40\"><circle cx=\"20\" cy=\"20\" r=\"2\" fill=\"none\" stroke=\"%23ff9933\" stroke-width=\"0.2\" opacity=\"0.1\"/><circle cx=\"20\" cy=\"20\" r=\"8\" fill=\"none\" stroke=\"%23138808\" stroke-width=\"0.1\" opacity=\"0.05\"/></pattern></defs><rect width=\"200\" height=\"200\" fill=\"url(%23mandala)\"/></svg>')",
        'paisley': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\"><defs><pattern id=\"paisley\" patternUnits=\"userSpaceOnUse\" width=\"30\" height=\"30\"><path d=\"M15 5c5 0 10 5 10 10s-5 10-10 10c-2 0-4-1-5-3v8c0 2-1 3-3 3s-3-1-3-3V15c0-5 5-10 11-10z\" fill=\"%23d9563f\" opacity=\"0.03\"/></pattern></defs><rect width=\"60\" height=\"60\" fill=\"url(%23paisley)\"/></svg>')",
        'rangoli': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 80 80\"><defs><pattern id=\"rangoli\" patternUnits=\"userSpaceOnUse\" width=\"40\" height=\"40\"><polygon points=\"20,5 25,15 35,15 27,23 30,33 20,27 10,33 13,23 5,15 15,15\" fill=\"%23ff9933\" opacity=\"0.04\"/></pattern></defs><rect width=\"80\" height=\"80\" fill=\"url(%23rangoli)\"/></svg>')",
        'indian-flag': "linear-gradient(to bottom, #ff9933 33.33%, #ffffff 33.33%, #ffffff 66.66%, #138808 66.66%)",
        'saffron-gradient': "linear-gradient(135deg, #ff9933, #fd7e14)",
        'emerald-gradient': "linear-gradient(135deg, #138808, #10b981)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};