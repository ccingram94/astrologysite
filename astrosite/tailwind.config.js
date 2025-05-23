/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gold": "url('../public/gold.webp')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#D2AE3C",          // Brand gold
          "primary-content": "#000000",   // Text color on primary background
          "secondary": "#8B7355",        // Earthy brown
          "accent": "#F3EBCD",           // Mystical purple
          "neutral": "#2A303C",          // Dark gray
          "base-100": "#FFFFFF",         // White background
          "base-200": "#FFFFFF",         // White background
          "base-300": "#FFFFFF",         // White background
          "base-content": "#D2AE3C",     // Primary (gold) text color
          "info": "#D2AE3C",             // Light blue
          "success": "#86EFAC",          // Soft green
          "warning": "#FCD34D",          // Warm yellow
          "error": "#FB7185",            // Soft red

          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.3rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
        },
      },
    ],
    defaultTheme: "light",
  },
}
