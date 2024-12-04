import Link from 'next/link'
import { Phone } from 'lucide-react'
import logo from "../../public/logo.png"
import Image from 'next/image'
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl flex items-center font-bold text-blue-600">
          Next Gen
          <Image className='w-12  ' src={logo} alt="asd" />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
            {/* <li><Link href="/about" className="hover:text-blue-600">About</Link></li> */}
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-2 text-blue-600" />
          <span className="font-semibold">Call Us: (555) 123-4567</span>
        </div>
      </div>
    </header>
  )
}

export default Header

