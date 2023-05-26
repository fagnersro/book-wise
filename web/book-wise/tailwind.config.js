/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      content: {
        link: {
          content: '',
          background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
          borderRadius: '999px',

          marginRight: '1rem',
          transition: 'all 0.1s ease-in',
          height: '1.5rem',
          width: '0.25rem',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily: {
        sans: 'var(--font-nunito)',
      },

      colors: {
        green: {
          100: '#50B2C0',
          200: '#255D6A',
          300: '#0A313C',
        },

        purple: {
          100: '#8381D9',
          200: '#2A2879',
        },

        gray: {
          100: '#F8F9FC',
          200: '#E6E8F2',
          300: '#D1D6E4',
          400: '#8D95AF',
          500: '#303F73',
          600: '#252D4A',
          700: '#181C2A',
          800: '#0E1116',
        },

        gradient: {
          horizontal: 'inear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',
          vertical: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
        },
      },
    },
  },
  plugins: [],
}
