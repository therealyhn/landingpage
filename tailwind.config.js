/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        sm: '24px',
        md: '32px',
        lg: '48px',
        xl: '64px',
      },
    },
    extend: {
      colors: {
        ink: '#0b0c10',
        coal: '#11131a',
        slate: '#1b1f2a',
        haze: '#a8b0c1',
        accent: '#7ee7ff',
        accentDeep: '#4cc9f0',
        bg: '#0b0c10',
        surface: '#11131a',
        surfaceAlt: '#151826',
        border: '#242a38',
        text: '#eef1f6',
        muted: '#a8b0c1',
      },
      fontFamily: {
        sans: ['"Manrope"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      fontSize: {
        h1: ['56px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h2: ['36px', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h3: ['24px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        body: ['17px', { lineHeight: '1.6' }],
        label: ['12px', { lineHeight: '1.2', letterSpacing: '0.12em' }],
      },
      borderRadius: {
        surface: '16px',
        chip: '999px',
      },
      boxShadow: {
        glow: '0 0 40px rgba(126, 231, 255, 0.25)',
        soft: '0 12px 30px rgba(6, 8, 15, 0.35)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(transparent 95%, rgba(126, 231, 255, 0.08) 96%), linear-gradient(90deg, transparent 95%, rgba(126, 231, 255, 0.08) 96%)',
        spotlight:
          'radial-gradient(600px 220px at 20% 0%, rgba(126, 231, 255, 0.16), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        'fade-up-delay': 'fade-up 1s ease-out 0.2s both',
        'fade-in': 'fade-in 0.6s ease-out both',
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
