import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme';


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans],
        'dancing-script': ['"Dancing Script"', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
