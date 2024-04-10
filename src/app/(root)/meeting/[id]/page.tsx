"use client"

import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'
import { useGetCallById } from '../../../../../hooks/useGetCallById';
import Loader from '@/components/ui/Loader';

function Meeting({params: {id}} : {params : {id : string}}) {

const { user, isLoaded } = useUser();
const [setupCompleted, setSetupCompleted] = useState(false);
const { call, isCallLoading } = useGetCallById(id)


if(!isLoaded || !isCallLoading) return <Loader/>;

  return (
    <div className='min-h-screen w-full'>
        <StreamCall call={call}>
          <StreamTheme>
            {!setupCompleted ? (
              <MeetingSetup/>
            ) : (
              <MeetingRoom/>
            )}
          </StreamTheme>
        </StreamCall>
    </div>
  )
}

export default Meeting