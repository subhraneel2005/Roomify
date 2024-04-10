import Image from 'next/image'
import React from 'react'

function Loader() {
  return (
    <div className='flex-center min-h-screen w-full'>
        <Image
        src="/icons/loading-circle.svg"
        alt='Loading...'
        width={70}
        height={70}
        />
    </div>
  )
}

export default Loader