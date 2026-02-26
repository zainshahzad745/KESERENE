import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#000000",
        accent: {
          light: "#F5F5F5",
          mid: "#E5E5E5",
          dark: "#1A1A1A"
        }
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        serif: ['var(--font-outfit)', 'serif'], // Fallback to outfit for geometric serif replacements
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'premium': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'glow': 'none' // Remove glow for minimalism
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'wave-slow': 'wave 15s ease-in-out infinite',
        'wave-medium': 'wave 12s ease-in-out infinite',
        'wave-fast': 'wave 9s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translateY(-15px) rotate(2deg) scale(1.02)' },
          '50%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
          '75%': { transform: 'translateY(15px) rotate(-2deg) scale(0.98)' },
        },
        drift: {
          '0%': { transform: 'translateX(-5%) rotate(0deg)' },
          '50%': { transform: 'translateX(5%) rotate(5deg)' },
          '100%': { transform: 'translateX(-5%) rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
