import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frontend Mentor | Sunnyside agency landing page',
  description: 'Challenge Sunnyside agency landing page',
}

const PageHome = () => (
  <main className="flex min-h-screen flex-col items-center justify-center gap-10 text-7xl">
    <p className="text-primary">Hello World!!</p>
    <p className="text-5xl">Test Font Primary</p>
    <p className="font-secondary text-5xl ">Test Font Secondary</p>
  </main>
)

export default PageHome
