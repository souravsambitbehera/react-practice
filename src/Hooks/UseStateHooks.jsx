import React, { useState,useRef } from 'react'

const UseStateHooks = () => {
    const [user,setUser] = useState("sourav")
    const [check,setCheck]=useState(false)
    const ref = useRef(0)
  return (
    <div>
        <p>{check?"sourav":"sambit"}</p>
        <p>{user}</p>
        <input type="text" placeholder='your name' ref={ref} onChange={(e)=>setUser(e.target.value)} />
        <button onClick={()=>{setCheck(!check) 
            ref.current.focus()}}>Click Me</button>
    </div>
  )
}

export default UseStateHooks