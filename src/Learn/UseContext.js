import React, { useContext,createContext, useState } from 'react'

const myContext = createContext()

const Myapp =() => {
    const value = useContext(myContext);
    return(
        <>
            The value is {value}
        </>
    )
}


const UseContext = () => {
    const [item,setItem] =useState("")
  return (<div>
    <input type="text" onChange={(e)=>setItem(e.target.value)} />
    <myContext.Provider value={item}>
        <Myapp />
    </myContext.Provider>
  </div>
    
  )
}

export default UseContext