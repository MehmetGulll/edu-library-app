import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        rose_pompadour: {
          DEFAULT: '#e27396',
          100: '#390c1a',
          200: '#711734',
          300: '#aa234e',
          400: '#d73b6c',
          500: '#e27396',
          600: '#e88fab',
          700: '#eeabc0',
          800: '#f4c7d5',
          900: '#f9e3ea',
        },
        amaranth_pink: {
          DEFAULT: '#ea9ab2',
          100: '#400d1d',
          200: '#811a39',
          300: '#c12856',
          400: '#dd5981',
          500: '#ea9ab2',
          600: '#eeaec1',
          700: '#f3c2d1',
          800: '#f7d6e0',
          900: '#fbebf0',
        },
        mimi_pink: {
          DEFAULT: '#efcfe3',
          100: '#431632',
          200: '#852c63',
          300: '#c24893',
          400: '#d88bbb',
          500: '#efcfe3',
          600: '#f2d7e8',
          700: '#f5e1ed',
          800: '#f8ebf3',
          900: '#fcf5f9',
        },
        beige: {
          DEFAULT: '#eaf2d7',
          100: '#374516',
          200: '#6f8b2d',
          300: '#a2c64e',
          400: '#c6dc93',
          500: '#eaf2d7',
          600: '#eff5e0',
          700: '#f3f8e8',
          800: '#f7faf0',
          900: '#fbfdf7',
        },
        light_blue: {
          DEFAULT: '#b3dee2',
          100: '#16373a',
          200: '#2c6f75',
          300: '#42a6af',
          400: '#77c4cb',
          500: '#b3dee2',
          600: '#c1e4e7',
          700: '#d0ebed',
          800: '#e0f2f3',
          900: '#eff8f9',
        },
      },
    },
  },
  plugins: [],
};
export default config;
