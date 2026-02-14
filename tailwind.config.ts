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
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1E3A8A', // Mockup deep blue
          600: '#1e40af',
          700: '#1d4ed8',
          800: '#1e3a8a',
          900: '#172554',
        },
        accent: {
          500: '#F97316', // Mockup orange
          600: '#ea580c',
          700: '#c2410c',
        },
        cta: {
          500: '#DC2626', // Mockup red
          600: '#b91c1c',
          700: '#991b1b',
        }
      },
      fontFamily: {
        sans: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Meiryo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
