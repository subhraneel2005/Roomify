import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href={"/"} className='flex items-center gap-1'>
        <Image
          src={"/icons/logo.svg"}
          width={32}
          height={32}
          className='max-sm:size-10'
          alt='Roomify logo'/>
        <p className='text-[27px] font-extrabold text-white max-sm:hidden'>Roomify</p>
      </Link>

      <div className='flex-between gap-5'>

      </div>
    </nav>
  )
}

export default Navbar