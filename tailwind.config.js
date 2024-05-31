/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: '#4ECCA3',
      primary50:'#4ECCA2A3',
      secondary: '#336699',
      primarydark:'#303841',
      black:'#0B0D0F',
      white:'#FFFFFF',
      dark:'#3A4750',
      myred:'#EB4141',
      dim:'#333333',
      aqua:'#10E1F0',
      green:'#28a745	',
      orange:'#F06525',
      ruber:'#CC4E77',
      myblue:'#2962ff',
      bright:'#EEEEEE'
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'tablet': {'raw': '(min-width: 768px) and (max-width: 1024px)'},
      },
      boxShadow: {
        glow: '0 0 32px rgba(78, 204, 163, 0.7)', // Primary color glow
        md: '0 4px 16px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Standard medium drop shadow
      },
      
    },
  },
  plugins: [],
};
