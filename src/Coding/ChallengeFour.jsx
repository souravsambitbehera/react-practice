import React, { useState } from 'react'

const ChallengeFour = () => {
    const[data,setData] = useState("")
    if(data==="hello"){
        alert("you pass")
    }
    function HandelChange(e){
        setData(e.target.value)
    }
  return (
    <div>
        <input type="text" onKeyUp={HandelChange} />
    </div>
  )
}

export default ChallengeFour