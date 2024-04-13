import { SignIn, SignUp } from '@clerk/nextjs'
import React from 'react'

function SignsUp() {
  return (
    <main className='min-h-screen w-full flex-center p-3'>
        <SignUp/>
    </main>
  )
}

export default SignsUp