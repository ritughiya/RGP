import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      'md': '800px',
      'lg': '1000px',
    },
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
      xxs: ['10px', '23px'],
      xs: ['15px', '28px'],
      smm: ['14px', '23px'],
      sm: ['14px', '23px'],
      md: ['16px', '23px'],
      base: ['18px', '23px'],
      lg: ['18px', '28px'],
      xl: ['23px', '38px'],
    },
    padding: {
      xs: '6px',
      sm: '12px',
      md: '20px',
      lg: '30px',
      xl: '40px',
      xxll: '50px',
      xll: '60px',
      xxl: '70px',
      xxxl: '95px',
      xxxlll: '110px',
      xxxllll: '130px',
      xxxxxl: '160px',
      xxxll: '200px',
      xxxxl: '280px',
      xxxxxxl: '300px',
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
      xxll: '50px',
      xll: '60px',
      xxl: '70px',
      xxxl: '95px',
      xxxlll: '110px',
      xxxllll: '130px',
      xxxxxl: '160px',
      xxxll: '200px',
      xxxxl: '280px',
      xxxxxxl: '300px',
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
