import React, { useState } from 'react'

const ChallengeThree = () => {
    const[data,setData] = useState("")
    function HandelOnChange(e){
        setData(e.target.value)
    }
    
    return (
    <div>
        <input type="text" onChange={HandelOnChange} />
        <p>you typed {data}</p>
    </div>
  )
}

export default ChallengeThree