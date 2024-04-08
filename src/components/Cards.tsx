"use client"

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface CardsProps {
    icon : string,
    className: string,
    title: string,
    description: string,
    handleClick: () => void;
}

function Cards({icon,className, title, description, handleClick}: CardsProps) {
  return (
    <div className={cn('px-5 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[20px] cursor-pointer' , className)} onClick={handleClick}>
            <div className='flex-center mt-10 size-12 rounded-[12px]'>
                <Image src={icon} alt='meetingIcon' width={24} height={24}/>
            </div>
            <div className='flex flex-col gap-3 py-6 font-bold'>
                <h1 className='text-lime-200 text-lg md:text-xl lg:text-xl font-extrabold'>{title}</h1>
                <p className='text-lime-300 text-sm md:text-lg lg:text-lg'>{description}</p>
            </div>
        </div>
  )
}

export default Cards