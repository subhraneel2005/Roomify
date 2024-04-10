 "use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Cards from './Cards'
import { useRouter } from 'next/navigation'
import MeetingModals from './MeetingModals'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useToast } from "@/components/ui/use-toast"


function MeetingLists() {

    const { toast } = useToast();
    const router = useRouter();
    const [meeting, setMeeting] = useState<'isJoinMeeting' | 'isScheduleMeeting' | 'isInstantMeeting' | undefined>();
    const client = useStreamVideoClient();
    const {user} = useUser();
    const [ value, setValue] = useState({
        dateTime: new Date,
        description: '',
        link: ''
    })
    const [callDetails, setCallDetails] = useState<Call>();

    const createMeeting = async() => {
        if(!user || !client) return;

        try {
            const id = crypto.randomUUID();
            const call = client.call("default", id);
            if(!call) throw new Error("Failed to create a call");
            const startsAt = value.dateTime.toISOString()|| new Date(Date.now()).toISOString();
            const description = value.description || "Instant meeting";

            await call.getOrCreate({
                data: {
                    starts_at: startsAt,
                    custom:{
                        description
                    }
                }
            })

            setCallDetails(call);

            if(!value.description){
                router.push(`/meeting/${call.id}`)
            }

            toast({title: "Meeting created successfully"})
        } catch (error) {
            console.log(error);
            toast({title: "Failed to create meeting"})
            
        }
    }

  return (
    <section className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4'>
        <Cards
            icon = "/icons/add-meeting.svg"
            title = "New Meeting"
            description="Create a new meeting"
            handleClick = {() => setMeeting('isInstantMeeting')}
            className = "bg-lime-600"
        />
        <Cards
            icon = "/icons/join-meeting.svg"
            title = "Join Meeting"
            description="Join a meeting connect with people"
            handleClick = {() => setMeeting('isJoinMeeting')}
            className = "bg-pink-600"
        />
        <Cards
            icon = "/icons/schedule.svg"
            title = "Schedule Meeting"
            description="Schedule a meeting for later"
            handleClick = {() => setMeeting('isScheduleMeeting')}
            className = "bg-purple-600"
        />
        <Cards
            icon = "/icons/recordings.svg"
            title = "View Recordings"
            description="Check out your recordings"
            handleClick = {() => router.push("/recordings")}
            className = "bg-sky-600"
        />
        <MeetingModals
            isOpen = {meeting === "isInstantMeeting"}
            onClose = {() => setMeeting(undefined)}
            title = "Start an instant meeting!"
            buttonText = "Start meeting"
            className = "text-center"
            handleClick = {createMeeting}
        />
    </section>
  )
}

export default MeetingLists