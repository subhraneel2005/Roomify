 "use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Cards from './Cards'
import { useRouter } from 'next/navigation'
import MeetingModals from './MeetingModals'

function MeetingLists() {

    const router = useRouter();

    const createMeeting = () => {

    }

    const [meeting, setMeeting] = useState<'isJoinMeeting' | 'isScheduleMeeting' | 'isInstantMeeting' | undefined>();

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