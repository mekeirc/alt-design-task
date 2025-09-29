/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // Next.js /app directory
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    // (if you still use /pages)
    "./components/**/*.{js,ts,jsx,tsx,mdx}" // components folder
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["var(--font-gilroy)", "sans-serif"],
        plexmono: ["var(--font-plexmono)", "monospace"],
      },
    },
  },
  plugins: [],
};