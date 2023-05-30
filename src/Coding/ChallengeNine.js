import React, { useState } from 'react'

const ChallengeNine = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h2>
            {count%15===0 ? "FizzBuzz":
            count%5===0 ? "Fizz" :
            count%3===0? "buzz" : count }
        </h2>
        <button onClick={()=>{setCount(count+1)}}>increment</button>
        <button onClick={()=>{setCount(count-1)}}>decrement</button>
    </div>
  )
}

export default ChallengeNine