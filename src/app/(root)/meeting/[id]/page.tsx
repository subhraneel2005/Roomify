import React from 'react'

function Meeting({params} : {params : {id : String}}) {
  return (
    <div>
        <h1>Meeting</h1>
        <br />
        <p>Meeting id: {params.id}</p>
    </div>
  )
}

export default Meeting