

import { cn } from '@/lib/utils';
import { CallControls, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'

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
        <div className={cn('h-[calc(100vh-87px)] hidden ml-3', {"show-block" : showParticipants} )}>
          <CallParticipantsList onClose={() => setShowParticipants(false)}/>
        </div>
      </div>

      <div className='fixed bottom-0 justify-center items-center gap-7 flex w-full'>
        <CallControls/>
      </div>
    </section>
  )
}

export default MeetingRoom