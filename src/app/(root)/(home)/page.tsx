import { url } from 'inspector'
import React from 'react'
import heroImage from "../../../../public/images/hero-background.png"

function Home() {

  const current = new Date();

  const currentTime = current.toLocaleTimeString("en-IN", {hour:"2-digit", minute:"2-digit"});
  const currentDate = (new Intl.DateTimeFormat("en-IN", {dateStyle: "full"})).format(current);
  return (
    <section className='flex size-full flex-col gap-10 text-gray-300'>
      <div className='h-[300px] w-full rounded-[18px] bg-cover bg-hero'>
        <div className='flex flex-col justify-between max-md:py-8 h-full px-5 lg:py-11'>
          <h1 className='text-center py-3
          max-w-[270px] font-semibold text-lg'>Upcoming meeting at 11:00 AM</h1>
          <div className=' flex flex-col gap-3'>
            <h1 className='text-5xl text-emerald-500 lg:text-7xl font-extrabold'>
             {currentTime}
            </h1>
            <p className='text-lg font-semibold text-emerald-700 lg:text-2xl'>{currentDate}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home