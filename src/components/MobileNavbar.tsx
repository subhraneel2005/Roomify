"use client"
import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";  
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '../../constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

function MobileNavbar() {
    const pathname = usePathname();
  return (
    <section className='w-full max-w-[265px]'>
        <Sheet>
            <SheetTrigger asChild>
                <Image
                    src={"/icons/hamburger.svg"}
                    height={38}
                    width={38}
                    alt='menuTag'
                    className='cursor-pointer sm:hidden'/>
            </SheetTrigger>
            <SheetContent side="left" className='border-none bg-dark-1'>
            <Link href={"/"} className='flex items-center gap-1'>
                <Image
                src={"/icons/logo.svg"}
                width={32}
                height={32}
                className='max-sm:size-10'
                alt='Roomify logo'/>
                <p className='text-[27px] font-extrabold text-white max-sm:hidden'>Roomify</p>
            </Link>

            <div className='flex h-[calc(100vh - 72px)] flex-col justify-between overflow-y-auto'>
                <SheetClose asChild>
                    <section className='flex h-full flex-col gap-6 pt-16 text-white'>
                    {sidebarLinks.map((link) =>{
                const isActive = pathname === link.route || pathname.startsWith(`${link.route } + '/'`);

                return(
                    <SheetClose asChild key={link.route}>
                        <Link href={link.route}
                        key={link.label}
                        className={cn("flex gap-4 items-center p-4 rounded-xl w-full max-w-60", {"bg-blue-2 duration-300": isActive})}>
                        <Image
                            src={link.imgUrl}
                            alt={link.label}
                            width={18}
                            height={18}/>
                            <p className='font-semibold'>{link.label }</p>
                        </Link>
                    </SheetClose>
                )
            } )}
                    </section>
                </SheetClose>
            </div>
            </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNavbar