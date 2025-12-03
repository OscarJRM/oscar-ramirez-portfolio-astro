import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,astro}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary_custom': {
          50: 'rgb(168 85 247 / 0.1)',  
          100: 'rgb(168 85 247 / 0.2)', 
          200: 'rgb(168 85 247 / 0.3)', 
          300: 'rgb(168 85 247 / 0.4)', 
          400: 'rgb(168 85 247 / 0.5)', 
          500: 'rgb(168 85 247 / 0.7)', 
          600: 'rgb(168 85 247 / 0.8)', 
          700: 'rgb(168 85 247 / 0.9)', 
          800: 'rgb(168 85 247)',        
        }
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
