import React, { useState } from 'react'
import MyContext from './CreateContext'
import Consumer from './Consumer'

const ParentContext = () => {
    const[count,setCount]= useState(0)
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1)
    }
  return (
    <div>
        <MyContext.Provider value={{increment,decrement,count}}>
            <Consumer />
        </MyContext.Provider>
    </div>
  )
}

export default ParentContext