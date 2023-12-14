const colors = require("wasedatime-ui/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColors: colors,
      colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


// const config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//     './hoc/**/*.{js,ts,jsx,tsx,mdx}',
//     './ui/**/*.{js,ts,jsx,tsx,mdx}'
//   ],
//   theme: {
//     extend: {
//       colors: {
//         "primary": "rgb(var(--primary), <alpha-value>)",
//         "primary-lighten": "rgb(var(--primary-lighten), <alpha-value>)",
//         "primary-dark": "rgb(var(--primary-dark), <alpha-value>)",
//         "ground": "rgb(var(--ground), <alpha-value>)",
//         "ground-light": "rgb(var(--ground-light), <alpha-value>)",
//         "surface": "rgb(var(--surface), <alpha-value>)",
//         "surface-light": "rgb(var(--surface-light), <alpha-value>)",
//         "surface-dark": "rgb(var(--surface-dark), <alpha-value>)",
//         "surface-1": "rgb(var(--surface-1), <alpha-value>)",
//         "surface-2": "rgb(var(--surface-2), <alpha-value>)",
//         "surface-3": "rgb(var(--surface-3), <alpha-value>)",
//         "surface-4": "rgb(var(--surface-4), <alpha-value>)",
//         "surface-5": "rgb(var(--surface-5), <alpha-value>)",
//         "surface-6": "rgb(var(--surface-6), <alpha-value>)",
//         "surface-7": "rgb(var(--surface-7), <alpha-value>)",
//         "surface-8": "rgb(var(--surface-8), <alpha-value>)",
//         "surface-9": "rgb(var(--surface-9), <alpha-value>)",
//         "surface-10": "rgb(var(--surface-10), <alpha-value>)",
//         "surface-11": "rgb(var(--surface-11), <alpha-value>)",
//         "accent-1": "rgb(var(--accent-1), <alpha-value>)",
//         "accent-2": "rgb(var(--accent-2), <alpha-value>)",
//         "accent-3": "rgb(var(--accent-3), <alpha-value>)",
//         "accent-4": "rgb(var(--accent-4), <alpha-value>)",
//         "accent-5": "rgb(var(--accent-5), <alpha-value>)",
//         "accent-6": "rgb(var(--accent-6), <alpha-value>)",
//         "accent-7": "rgb(var(--accent-7), <alpha-value>)",
//         "accent-8": "rgb(var(--accent-8), <alpha-value>)",
//         "accent-9": "rgb(var(--accent-9), <alpha-value>)",
//         "accent-10": "rgb(var(--accent-10), <alpha-value>)",
//       },
//       fontSize: {
//         '3xl': '2rem',
//         '2xl': '1.75rem',
//         'xl': '1.5rem',
//         'lg': '1.25rem',
//         'md': '1.125rem',
//         'xs': '0.625rem'
//       },
//       lineHeight: {
//         0: 0,
//         1: 1,
//         2: 1.25,
//         3: 1.5,
//         4: 2
//       },
//       zIndex: {
//         1: 1,
//         2: 2,
//         3: 3,
//         4: 4,
//         5: 5,
//         6: 6,
//         7: 7,
//         8: 8,
//         9: 9
//       },
//       boxShadow: {
//         1: "0.25rem 0 0.25rem 0 rgba(0, 0, 0, 0.25)",
//         2: "0.125rem 0.125rem 0.25rem 0.0625rem rgba(44, 44, 44, 0.07)",
//         3: "0.125rem 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.05);",
//         4: "0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.10);"
//       },
//       flex: {
//         1: 1,
//         2: 2
//       }
//     },
//   },
//   important: true,
//   plugins: [],
// }