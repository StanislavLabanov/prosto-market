import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundColor: {
        button: '#DC306B',
        screen: '#343434',
      },
      colors: {
        text: '#1E1E1E',
      },
      fontFamily: {
        comfortaa: 'var(--font-comfortaa)',
        norms: 'var(--font-ttnorms)',
      },
    },
  },
  plugins: [],
};
export default config;
