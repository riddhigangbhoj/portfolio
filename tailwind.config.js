/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'white': '#FFFFFF',
        'light-gray': '#F8F9FA',
        'gray': '#6B7280',
        'dark-gray': '#374151',
        'black': '#000000',
        'blue-gray': '#64748B',
        'soft-pink': '#F2E6F0',
        'muted-pink': '#D1789D',
      },
    },
  },
  plugins: [],
};
