import twm from '../images/logo_white.webp';
import { useState } from 'react';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (
<nav className="z-[100] bg-white/30 backdrop-blur-md shadow-lg">
    <div className="flex items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <img src={twm} alt="twm" className="w-[70px] p-1" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-6 text-gray-700 font-medium">
                <li className="hover:text-blue-500 cursor-pointer">Home</li>
                <li className="hover:text-blue-500 cursor-pointer">About Us</li>
                <li className="hover:text-blue-500 cursor-pointer">Services</li>
                <li className="hover:text-blue-500 cursor-pointer">Blogs</li>
                <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
            </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
            className="md:hidden p-2 rounded-md focus:outline-none hover:bg-gray-100"
            onClick={() => setShowMenu(!showMenu)}
        >
            <svg
                className="h-6 w-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
        </button>
    </div>

    {/* Mobile Menu */}
    {showMenu && (
        <ul className="md:hidden flex flex-col space-y-4 px-4 py-2 bg-white/50 backdrop-blur-md shadow-md text-gray-700 font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">Blogs</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
        </ul>
    )}
</nav>


  )
}

export default Navbar