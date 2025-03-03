
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#121212',
          lighter: '#282828',
          hover: '#2A2A2A',
          card: '#181818',
        },
        primary: '#1DB954', // Spotify-like green
        secondary: '#B026FF',
        accent: '#FF7597',
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
          tertiary: '#727272',
        },
        navy: {
          800: '#001f3f',
          900: '#003366',
        },
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #001f3f, #003366)',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui'],
        heading: ['Montserrat', 'sans-serif'],
        body: ['Lora', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
