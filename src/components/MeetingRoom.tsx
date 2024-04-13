

import { cn } from '@/lib/utils';
import { CallControls, CallParticipantsList, CallStatsButton, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutList, Users } from 'lucide-react';


type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

function MeetingRoom() {

  const [layout, setLayout] = useState<CallLayoutType>('speaker-left');

  const [showParticipants, setShowParticipants] = useState(false)

  const CallLayout = () => {
    switch(layout){
      case "grid" : 
        return <PaginatedGridLayout/>;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left"/>
      default:
        return <SpeakerLayout participantsBarPosition="right"/>
    }
  }
  return (
    <section className='relative h-screen w-full overflow-hidden  pt-4 text-white'>
      <div className='relative flex size-full items-center justify-center'>
        <div className='flex size-full max-w-[1000px] items-center'>
          <CallLayout/>
        </div>
        <div className={cn('h-[calc(100vh-87px)] hidden ml-3', {"block" : showParticipants} )}>
          <CallParticipantsList onClose={() => setShowParticipants(false)}/>
        </div>
      </div>

      <div className='fixed bottom-0 justify-center items-center gap-7 flex w-full'>
        <CallControls/>
        <DropdownMenu>

          <div className='flex items-center'>
          <DropdownMenuTrigger className='cursor-pointer rounded-xl px-4 py-2'>
            <LayoutList size={30} className='text-emerald-600'/>
          </DropdownMenuTrigger>
          </div>

          <DropdownMenuContent className='border-dark-1 bg-dark-1 text-white'>
            {["Grid", "Speaker-Left", "Speaker-Right"].map((id,index) => (
              <div key={index}>
                <DropdownMenuItem className='cursor-pointer'
                onClick={() => {
                  setLayout(id.toLowerCase() as CallLayoutType)
                }}>
                  {id}
                </DropdownMenuItem>
              </div>
            ))}
            <DropdownMenuSeparator className='border-dark-1' />
          </DropdownMenuContent>
        </DropdownMenu>
          <CallStatsButton/>
          <button onClick={() =>
            setShowParticipants((prev) => !prev)
          }>
              <div className='cursor-pointer rounded-xl bg-dark-1'>
                <Users size={25}/>
              </div>
          </button>
      </div>
    </section>
  )
}

export default MeetingRoom