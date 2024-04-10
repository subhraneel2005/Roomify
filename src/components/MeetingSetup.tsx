"use client"

import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

function MeetingSetup({setSetupCompleted} : {
    setSetupCompleted: (value: boolean) => void }) {

    const [isMicCamOn, setIsMicCamOn] = useState(false);

    const call = useCall();

    if(!call) {
        throw new Error("failed to connect to call");
    }

    useEffect(() => {
        if(isMicCamOn){
            call?.camera.disable();
            call?.microphone.disable();
        }
        else{
            call?.camera.enable();
            call?.microphone.enable();
        }
    }, [isMicCamOn, call?.camera, call?.microphone])

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
        <h1 className='text-3xl font-bold'>Setup here !</h1>
        <VideoPreview/>
        <div className='flex justify-center items-center gap-3 h-16'>
             <label className='flex items-center justify-center gap-3 font-medium'>
                <input type="checkbox" 
                checked={isMicCamOn}
                onChange={(e) => setIsMicCamOn(e.target.checked)} />
                Join with mic and camera turned off
             </label>
             <DeviceSettings/>
        </div>
        <Button className='bg-blue-600 rounded-xl px-4 py-3' onClick={() => {
            call.join();
            setSetupCompleted(true);
        }}>
            Join meeting
        </Button>
    </div>
  )
}

export default MeetingSetup