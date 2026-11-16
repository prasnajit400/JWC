/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          950: '#0a0f1d',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
          200: '#e2e8f0',
          100: '#f1f5f9',
          50: '#f8fafc',
        },
        navy: {
          950: '#081426',
          900: '#0f2038',
          800: '#173254',
          700: '#1d416f',
          600: '#0369a1',
          500: '#0284c7',
        },
        weld: {
          DEFAULT: '#ea580c',
          hover: '#c2410c',
          spark: '#f97316',
          amber: '#fb923c',
          light: '#ffedd5',
          50: '#fff7ed',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(15, 23, 42, 0.08), 0 1px 3px -1px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 12px 24px -6px rgba(15, 23, 42, 0.12), 0 4px 8px -2px rgba(15, 23, 42, 0.06)',
      }
    },
  },
  plugins: [],
}
