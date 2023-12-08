import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundColor: ({ theme }) => ({
            ...theme('colors'),
      'primary': '#151515',
     }),
    fontFamily: {
      'condensed': ['HelveticaNeueLTPro-Cn', 'Arial', 'sans-serif'],
      'sans': ['Arial', 'sans-serif'],
      'mono': ['PTMono', 'monospace'],
    },
    fontSize: {
      xxs: ['10px', '24px'],
      xs: ['14px', '28px'],
      smm: ['13px', '18px'],
      sm: ['13px', '21px'],
      md: ['16px', '24px'],
      base: ['18px', '24px'],
      lg: ['18px', '28px'],
      xl: ['23px', '38px'],
    },
    padding: {
      xs: '6px',
      sm: '12px',
      md: '20px',
      lg: '30px',
      xl: '40px',
      xxl: '70px',
      xxxl: '95px',
      '1': '1%',
      '1/5': '1.5%',
      '2': '2%',
      '2/5': '2.5%',
      '3': '3%',
      '4': '4%',
      '5': '5%',

    },
    margin: {
      xs: '6px',
      sm: '12px',
      md: '20px',
      lg: '30px',
      xl: '40px',
      xxl: '70px',
      xxxl: '95px',
      xxxll: '200px',
      xxxxl: '280px'
    },
    maxWidth: {
      '7/10': '70vw',
     },
     maxHeight: {
      '7/10': '70vh',
     },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
        spacing: {
          'fixed': '300px',
        }
    },
  },
  plugins: [],
}
export default config
