import React from 'react'
import { useState } from 'react'

const ChallengeSix = () => {
    const[count, setCount]=useState(0)

    function HandelClick(type){
        type==="Increment"?setCount(count+1):setCount(count-1)
    }
  return (
    <div>
        <p>The count is {count}</p>
        <button onClick={()=>HandelClick("Increment")}>Increment</button>
        <button onClick={()=>HandelClick("Decrement")}>Decrement</button>
    </div>
  )
}

export default ChallengeSix