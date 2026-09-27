/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F6FF',
          100: '#E0EDFF',
          200: '#C2DCFF',
          300: '#94C3FF',
          400: '#60A0FF',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#0F52BA', // Royal/deep blue
          800: '#1E3A8A',
          900: '#0F172A',
          950: '#070D19',
        },
        surface: {
          light: '#F8FAFC',
          card: '#FFFFFF',
          cardHover: '#F1F5F9',
          accent: '#EFF6FF',
          border: '#E2E8F0',
          borderActive: '#BFDBFE',
        },
        navy: {
          900: '#0F172A',
          800: '#1E293B',
          600: '#475569',
          400: '#94A3B8',
        }
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      fontFamily: {
        sans: ['System', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
