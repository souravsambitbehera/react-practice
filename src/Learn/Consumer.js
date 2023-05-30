import React, { useContext } from 'react'
import MyContext from './CreateContext'

const Consumer = () => {
    const {increment,decrement,count} = useContext(MyContext)
  return (
    <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <p>{count}</p>

    </div>
  )
}

export default Consumer