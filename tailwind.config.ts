import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
      },
      colors: {
        'line-one': 'hsl(7, 99%, 70%)',
        'line-two': 'hsl(51, 100%, 49%)',
        'graphic-text': 'hsl(167, 40%, 24%)',
        'photography-text': 'hsl(198, 62%, 26%)',
        'footer-color': 'hsl(168, 34%, 41%)',
        'dark-one': 'hsl(212, 27%, 19%)',
        'dark-two': 'hsl(213, 9%, 39%)',
        'dark-three': 'hsl(210, 4%, 67%)',
        'dark-four': 'hsl(232, 10%, 55%)',
        'rear-footer': 'hsl(167, 44%, 70%)',
      },
      backgroundImage: {
        'logo-mobile': 'url("/images/mobile/image-header.jpg")',
        'logo-desktop': 'url("/images/desktop/image-header.jpg")',
        'cherry-pic-mobile': 'url("/images/mobile/image-graphic-design.jpg")',
        'orange-pic-mobile': 'url("/images/mobile/image-photography.jpg")',
        'cherry-pic-desktop': 'url("/images/desktop/image-graphic-design.jpg")',
        'orange-pic-desktop': 'url("/images/desktop/image-photography.jpg")',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [],
    darkTheme: 'light',
    logs: false,
  },
}

export default config
