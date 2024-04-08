import { SignIn } from '@clerk/nextjs'
import React from 'react'

function SignsIn() {
  return (
    <main className='min-h-screen w-full flex-center p-3'>
        <SignIn/>
    </main>
  )
}

export default SignsIn