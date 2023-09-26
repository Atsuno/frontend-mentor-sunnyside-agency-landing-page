import { Barlow, Fraunces } from 'next/font/google'

const fontPrimary = Barlow({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-primary',
})

const fontSecondary = Fraunces({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-secondary',
})

const useFonts = [fontPrimary, fontSecondary]

/* #####################
 * Magic
 ####################### */
const fontClass = useFonts.map((font) => (
  font.variable
)).join(' ')

export default fontClass
