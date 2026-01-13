import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#002147',
        'premium-gold': '#D4AF37',
        'deep-teal': '#0A7C7C',
        'soft-sage': '#8A9A5B',
        'light-ivory': '#F8F5F0',
        'charcoal': '#2C3E50',
        'warm-gray': '#E5E2DD',
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },
        accent: {
          purple: '#7c3aed',
          purpleDark: '#6d28d9',
          teal: '#0d9488',
          tealDark: '#0f766e',
          rose: '#e11d48',
          roseDark: '#be123c',
          amber: '#d97706',
          amberDark: '#b45309'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'premium': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'premium-lg': '0 20px 60px rgba(0, 0, 0, 0.12)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;
