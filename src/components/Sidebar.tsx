import React from 'react'

function Sidebar() {
  return (
    <section className='stcky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
        <div className='flex flex- flex-col gap-6'>
            {sidebarLinks.map((link) => (
                <div></div>
            ))}
        </div>
    </section>
  )
}

export default Sidebar