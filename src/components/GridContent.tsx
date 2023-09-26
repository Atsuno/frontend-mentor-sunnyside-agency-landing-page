import Image from 'next/image'
import Link from 'next/link'

const GridContent = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 ">
    <div className="md:col-start-2 md:row-start-1">
      <Image className="h-full w-full object-cover md:hidden" width={750} height={624} src="./images/mobile/image-transform.jpg" alt="eggPicture" />
      <Image className="hidden h-full w-full object-cover md:block" width={720} height={600} src="./images/desktop/image-transform.jpg" alt="eggPicture" />
    </div>

    <div className="flex flex-col items-center p-5 text-center md:items-start md:justify-center md:px-[20%] md:text-left">
      <h1 className="pb-5 font-secondary text-3xl font-extrabold">Transform your brand</h1>
      <p className="text-dark-four">
        We are a full-service creative agency specializing in helping brands grow fast.
        Engage your clients through compelling visuals that do most of the marketing for you.
      </p>
      <div className="py-5 font-secondary font-extrabold uppercase">
        <Link href="./">Learn more</Link>
        <hr className=" -mt-2 rounded-full border-4 border-line-two/30" />
      </div>
    </div>

    <div>
      <Image className="h-full w-full object-cover md:hidden" width={750} height={624} src="./images/mobile/image-stand-out.jpg" alt="glassPicture" />
      <Image className="hidden h-full w-full object-cover md:block " width={720} height={600} src="./images/desktop/image-stand-out.jpg" alt="glassPicture" />
    </div>

    <div className="flex flex-col items-center p-5 text-center md:items-start md:justify-center md:px-[20%] md:text-left">
      <h2 className="pb-5 font-secondary text-3xl font-extrabold">Stand out to the right audience</h2>
      <p className="text-dark-four">
        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
      </p>
      <div className="py-5 font-secondary font-extrabold uppercase">
        <Link href="./">Learn more</Link>
        <hr className="-mt-2 rounded-full border-4 border-line-one/30" />
      </div>
    </div>

    <div className="flex h-full w-full flex-col  items-center justify-end bg-cherry-pic-mobile  bg-cover bg-center bg-no-repeat  p-5 text-center md:h-[450px] md:bg-cherry-pic-desktop lg:h-[600px]">
      <h3 className="pb-4 font-secondary text-3xl font-extrabold text-graphic-text ">Graphic design</h3>
      <p className="px-[10%] pb-5 text-graphic-text">
        Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
      </p>
    </div>
    <div className="flex h-full w-full flex-col items-center justify-end bg-orange-pic-mobile bg-cover bg-center bg-no-repeat  p-5 text-center md:h-[450px] md:bg-orange-pic-desktop lg:h-[600px]">
      <h4 className="pb-4 font-secondary text-3xl font-extrabold text-photography-text ">Photography</h4>
      <p className="px-[10%] pb-5 text-photography-text">
        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
      </p>
    </div>
  </section>
)

export default GridContent
