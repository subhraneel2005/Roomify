import React, { ReactNode } from 'react'

function layout({children} : {children : ReactNode}) {
  return (
    <main>
        {children}
    </main>
  )
}

export default layout