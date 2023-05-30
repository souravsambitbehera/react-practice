import React, { useState } from 'react'

const ChallengeTen = () => {
    const[display,setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=>{setDisplay(!display)}}>{display?"hide":"show"}</button>
        { display && <h2>Here is the data</h2> }
    </div>
  )
}

export default ChallengeTen