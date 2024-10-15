import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-reverse': 'spin 3s linear infinite reverse',
      },
      keyframes: {
        // spin: {
        //   '0%': { transform: 'rotate(0deg)' },
        //   '100%': { transform: 'rotate(360deg)' }
        // },
      }
    },
  },
  plugins: [],
}

