/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: {
          DEFAULT: '#141414',
          subtle: '#1C1C1C',
          border: '#292929',
        },
        gold: {
          light: '#FCD34D',
          DEFAULT: '#F5B301',
          dark: '#C98A00',
          glow: 'rgba(245, 179, 1, 0.18)',
        },
        silver: {
          DEFAULT: '#F2F2F2',
          muted: '#A3A3A3',
          dark: '#737373',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-sora)', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5B301 0%, #C98A00 100%)',
        'gold-glow': 'radial-gradient(circle, rgba(245, 179, 1, 0.15) 0%, rgba(10, 10, 10, 0) 70%)',
        'dark-card': 'linear-gradient(180deg, rgba(28, 28, 28, 0.7) 0%, rgba(15, 15, 15, 0.9) 100%)',
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(245, 179, 1, 0.15)',
        'gold-md': '0 0 30px rgba(245, 179, 1, 0.25)',
        'gold-lg': '0 0 50px rgba(245, 179, 1, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
