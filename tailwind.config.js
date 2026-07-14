/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0eaff',
          700: '#0479B5',
          800: '#033F90',
          900: '#052B6C',
          950: '#031B44',
        },
        accent: {
          100: '#FFF1E5',
          500: '#FF850A',
          600: '#F77606',
          700: '#D95F00',
        },
        whatsapp: '#25D366',
        surface: {
          DEFAULT: '#F7F9FC',
          blue: '#F2F7FC',
        },
        neutral: {
          text: '#172033',
          secondary: '#5E6878',
          border: '#E2E7EE',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        'premium-sm': '16px',
        'premium': '20px',
        'premium-lg': '28px',
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(3, 27, 68, 0.03), 0 2px 8px -1px rgba(3, 27, 68, 0.02)',
        'premium-hover': '0 12px 30px -4px rgba(3, 27, 68, 0.06), 0 4px 12px -2px rgba(3, 27, 68, 0.04)',
      }
    },
  },
  plugins: [],
}
