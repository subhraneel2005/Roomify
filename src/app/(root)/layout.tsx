import React, { ReactNode } from 'react'
import StreamVideoProvider from '../../providers/StreamClientProvider'

function layout({children} : {children : ReactNode}) {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default layout