import Image from 'next/image'
import NavBar from '@/components/NavBar'

const Banner = () => (

  <div className="relative">

    <div className="md:hidden">
      <Image width={750} height={1076} src="./images/mobile/image-header.jpg" alt="Image Header" />
    </div>

    <div className="hidden md:block">
      <Image width={2880} height={1600} src="./images/desktop/image-header.jpg" alt="Image Header" />
    </div>

    <div className="absolute top-2/4 flex w-full justify-center">
      <Image width={36} height={114} src="./images/icon-arrow-down.svg" alt="arrow down" />
    </div>
    <h1 className="absolute top-[30%] w-full text-center font-secondary text-3xl uppercase tracking-widest text-white">We are creatives</h1>

    <NavBar />

  </div>
)

export default Banner
