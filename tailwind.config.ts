import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // This disables automatic dark mode based on prefers-color-scheme
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
