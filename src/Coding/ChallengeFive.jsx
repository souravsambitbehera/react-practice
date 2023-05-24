import React, { useState } from 'react'

const ChallengeFive = () => {
    const[valueOne,setValueOne] = useState(0)
    const[valueTwo,setValueTwo] = useState(0)
  return (
    <div>
        Enter valueOne: <input type="text" onChange={(e)=>setValueOne(parseInt(e.target.value))} />
        Enter ValueTwo<input type="text" onChange={(e)=>setValueTwo(parseInt(e.target.value))} />
        <p>The sum is{valueOne + valueTwo} </p>
    </div>
  )
}

export default ChallengeFive