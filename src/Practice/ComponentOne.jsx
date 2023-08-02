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


const ComponentOne = () => {
    const [item,setItem] =useState("sourva")
  return (<div>
    <myContext.Provider value={item}>
        <Myapp />
    </myContext.Provider>
  </div>
    
  )
}

export default ComponentOne