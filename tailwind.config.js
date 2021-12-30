module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx', './_blog/*.mdx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#CBF0FE',
          200: '#98DCFD',
          300: '#64C1F9',
          400: '#3DA6F4',
          500: '#017CED',
          600: '#0060CB',
          700: '#0047AA',
          800: '#003289',
          900: '#002371',
        },
        dark: {
          100: '#eeeeee',
          200: '#e0e0e0',
          300: '#bbbbbb',
          400: '#666666',
          500: '#444444',
          600: '#2a2a2a',
          700: '#1f1f1f',
          800: '#181818',
          900: '#0f0f0f',
        },
        gray: {
          100: '#eeeeee',
          200: '#e0e0e0',
          300: '#bbbbbb',
          400: '#666666',
          500: '#444444',
          600: '#2a2a2a',
          700: '#1f1f1f',
          800: '#181818',
          900: '#0f0f0f',
        },
      },
      boxShadow: {
        xl: '0 10px 10px -8px rgba(0,0,0,.22)',
      },
    },
  },
  plugins: [],
}
