import React, { createContext, useContext } from 'react'
import MyContext from '../Learn/CreateContext';

const myContext = createContext();




const ChallengeSeven = () => {
  return (
    <div>
      <myContext.Provider value ="sourav">
        <Child />
      </myContext.Provider>
    </div>
  )
}

const Child = () => {
  const myValue = useContext(myContext)
  return(
    <div>
      hello {myValue}
    </div>
  )
}



export default ChallengeSeven