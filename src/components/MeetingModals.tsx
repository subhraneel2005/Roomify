import React, { ReactNode } from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface MeetingModalProps{
    isOpen: boolean;
    onClose: () => void;
    title: string,
    handleClick?: () => void;
    buttonText?: string;
    className?:string;
    children?: ReactNode;
    buttonIcon?: string;
    image?:string
}

function MeetingModals({isOpen, onClose, title, handleClick,buttonText, children, className,image,buttonIcon }: MeetingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className='flex w-full max-w-[520px] flex-col gap-7 border-none bg-dark-1 px-7 py-8 text-white'>
            <div className='flex flex-col gap-7'>
                {image && (
                    <div className='flex justify-center'>
                        <Image
                            src={image}
                            alt='Meeting Picture'
                            height={73}
                            width={73}
                        />
                    </div>
                )}
                <h1 className={cn("text-3xl font-semibold", className)}>
                    <DialogTitle>{title}</DialogTitle>
                   {children} 
                </h1>
                <Button className='focus-visible:ring-0 focus-visible:ring-offset-0 bg-blue-2' onClick={handleClick}>
                    {buttonIcon && (
                        <Image src={buttonIcon} alt='buttonIcon' width={14} height={14}/>
                    )}&nbsp;
                    {buttonText || "Schedule a meeting"}
                </Button>
            </div>
        </DialogContent>
    </Dialog>

  )
}

export default MeetingModals