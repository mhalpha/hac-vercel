import type { Config } from 'tailwindcss';
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        red: {
          main: '#c8102e',
          white: '#d0344d',
          light: '#f7e6e6',
        },
        grey: {
          dark: '#b5b5b5',
          light: '#e6e6e6',
          text: '#080808b0',
        },
        black: '#0a0a0a',
      },
    },
  },
  plugins: [nextui()]

};
export default config;
