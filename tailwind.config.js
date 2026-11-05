/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0B0B0B',
        surface: '#141414',
        'surface-elevated': '#1A1A1A',
        border: '#262626',
        'border-hover': '#3F3F46',
        accent: {
          DEFAULT: '#F04444',
          hover: '#DC2626',
          light: '#F87171',
          glow: 'rgba(240, 68, 68, 0.25)',
        },
        muted: {
          DEFAULT: '#B3B3B3',
          dark: '#737373',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Barlow Condensed"', 'sans-serif'],
        sans: ['Barlow', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2.5s infinite',
      },
    },
  },
  plugins: [],
};
