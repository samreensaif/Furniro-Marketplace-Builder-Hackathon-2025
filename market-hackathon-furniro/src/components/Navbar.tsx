'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Heart, ShoppingCart, UserCircle } from 'lucide-react'
import { useAtom } from 'jotai'
import { searchName } from '@/globalState/globalState'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [value, setValue] = useAtom(searchName)

  return (
    <nav className="relative w-full bg-white z-50">
      {/* Main container for Navbar */}
      <div className="max-w-[1286px] mx-auto px-4 exsm:px-2 xsm:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 flex items-center justify-between h-[41px] mt-[29px]">
        
        {/* Logo Section */}
        <div className="flex items-center gap-1 exsm:mr-0 xsm:ml-[50px] sm:ml-[80px] md:ml-[100px] lg:ml-[120px] xl:ml-[140px] 2xl:ml-[160px]">
          <h1 className="exsm:text-[20px] xsm:text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px] font-bold font-montserrat text-black flex items-center gap-4">
            <div>
              <Image src={'/logo.png'} alt={'Logo'} height={32} width={50} 
                className='exsm:w-[30px] exsm:h-[20px] xsm:w-[35px] xsm:h-[25px] sm:w-[40px] sm:h-[30px] md:w-[45px] md:h-[35px] lg:w-[50px] lg:h-[40px] xl:w-[55px] xl:h-[45px] 2xl:w-[60px] 2xl:h-[50px]' />
            </div>
            Furniro
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Home</Link>
          <Link href="/shop" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Shop</Link>
          <Link href="/blog" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Blog</Link>
          <Link href="/contact" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Contact</Link>
        </div>

        {/* Icons Section */}
        <div className="hidden sm:flex md:items-center gap-6 sm:pr-10">
          <input 
            type="search" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search..." 
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button aria-label="Search" className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Search className="w-6 h-6" />
          </button>
          <button aria-label="Account" className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <UserCircle className="w-6 h-6" />
          </button>
          <Link href={"/wishlist"}>
          <button aria-label="Wishlist" className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Heart className="w-6 h-6" />
          </button>
          
          </Link>
          <Link href="/cart">
            <button aria-label="Shopping Cart" className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile View - Hamburger Menu */}
      <div className="sm:hidden flex items-center justify-between px-4 py-0">
        <button
          aria-label="Menu"
          className="p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-1 bg-black mb-1 transition-transform duration-300" />
          <span className="block w-6 h-1 bg-black mb-1 transition-transform duration-300" />
          <span className="block w-6 h-1 bg-black transition-transform duration-300" />
        </button>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-white shadow-lg z-10 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4 bg-[#fff3e3]">
          <Link href="/" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/shop" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/blog" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/contact" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>

          {/* Mobile Search Section */}
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 w-[80%] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <div className="mt-2 flex items-center gap-6">
            <button aria-label="Search" onClick={() => setMenuOpen(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <Search className="w-6 h-6" />
            </button>
            <button aria-label="Account" onClick={() => setMenuOpen(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <UserCircle className="w-6 h-6" />
            </button>
            <button aria-label="Wishlist" onClick={() => setMenuOpen(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <Link href="/cart">
              <button aria-label="Shopping Cart" onClick={() => setMenuOpen(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                <ShoppingCart className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}