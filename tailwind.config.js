/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F5EFE6',
          300: '#EDE4D8',
          400: '#E1D3C1',
        },
        coffee: {
          900: '#1F1815',
          800: '#2C221E',
          700: '#3D302A',
          600: '#524139',
          500: '#6E594F',
          400: '#947D71',
          300: '#BDABA0',
          200: '#DFD5CE',
          100: '#EFE9E4',
        },
        sage: {
          900: '#233024',
          800: '#324333',
          700: '#465A47',
          600: '#5C735E',
          500: '#758F77',
          400: '#93AB95',
          300: '#B8CBB9',
          200: '#D5E2D6',
          100: '#EAF1EA',
          50: '#F4F7F4',
        },
        caramel: {
          800: '#7A4D22',
          700: '#96602D',
          600: '#B8783A',
          500: '#CE8B49',
          400: '#DF9F5E',
          300: '#ECBC88',
          200: '#F6DBBC',
          100: '#FBF0E2',
        }
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(44, 34, 30, 0.04)',
        'soft': '0 10px 30px -10px rgba(44, 34, 30, 0.08)',
        'hover': '0 20px 40px -15px rgba(44, 34, 30, 0.12)',
      }
    },
  },
  plugins: [],
}
