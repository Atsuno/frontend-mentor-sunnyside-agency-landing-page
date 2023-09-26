/* eslint-disable tailwindcss/classnames-order */
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'

const NavBar = () => (
  <section className="absolute top-0 p-4 w-full md:px-6 flex justify-between align-middle items-center">

    <div>
      <Image width={124} height={24} src="./images/logo.svg" alt="logo" />
    </div>

    <div className="md:hidden ">
      <details className="dropdown-end dropdown">
        <summary className=" list-none  text-white active:text-white/50 duration-200 text-3xl"><RxHamburgerMenu /></summary>
        <ul className="menu dropdown-content w-[calc(100vw-40px)]  bg-white px-3 items-center clip-polygon gap-2 py-8">
          <li><Link className="text-dark-four" href="./" about="About">About</Link></li>
          <li><Link className="text-dark-four" href="./" about="Services">Services</Link></li>
          <li><Link className="text-dark-four" href="./" about="Projects">Projects</Link></li>
          <li><Link className="bg-yellow-300 rounded-full font-secondary uppercase" href="./" about="Contact">Contact</Link></li>
        </ul>
      </details>
    </div>

    <div className="hidden md:flex  p-4 px-6 gap-8 text-white items-center">
      <Link href="./" about="About">About</Link>
      <Link href="./" about="Services">Services</Link>
      <Link href="./" about="Projects">Projects</Link>
      <Link className="uppercase font-secondary text-black bg-white rounded-full px-3 py-2 hover:bg-white/30 hover:text-white" href="./" about="Contact">Contact</Link>
    </div>

  </section>
)

export default NavBar
