/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    extend: {
      colors: {
        // light mode
        tremor: {
          brand: {
            faint: '#F9BD9C', // <--- tremor-brand-faint, lighter shade of brand color
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: '#F99157', // <--- tremor-brand-DEFAULT, brand color
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          // ...
        },
      },
    },
  },

  plugins: [],
}

