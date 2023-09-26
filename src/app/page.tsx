import type { Metadata } from 'next'
import Banner from '@/components/Banner'
import ClientReview from '@/components/ClientReview'
import FooterBar from '@/components/FooterBar'
import Gallery from '@/components/Gallery'
import GridContent from '@/components/GridContent'

export const metadata: Metadata = {
  title: 'Frontend Mentor | Sunnyside agency landing page',
  description: 'Challenge Sunnyside agency landing page',
}

const PageHome = () => (
  <section className=" lg:max-w-7xl ">
    <header>
      <Banner />
    </header>
    <main>
      <GridContent />
      <ClientReview />
      <Gallery />
    </main>
    <FooterBar />
  </section>
)

export default PageHome
